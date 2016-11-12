'use strict'

const http = require('http')
const ws = require('ws')
const Game = require('./game.js').Game
const User = require('./user.js').User

const PACKAGE = require('./package.json')
const SERVER = PACKAGE.name + '/' + PACKAGE.version

var games = {}
var sockets = {}

function roomcast(room, msg) {
  sockets[room].forEach(s => s.send(JSON.stringify(msg)))
}

function sendState(room) {
  roomcast(room, {
    event: 'state',
    activeDeck: games[room].activeDeck.map(serializeCard),
    camp: games[room].campCard
  })
}


function serializeCard(card) {
  return card
}

const server = http.createServer((req, res) => {
  res.setHeader('server', SERVER)
  res.end()
})

const wsServer = new ws.Server({ server: server })

var id = 0

wsServer.on('connection', s => {
  s.on('message', msg => {
    const parsed = JSON.parse(msg)
    const room = parsed.game
    const event = parsed.event

    if (event === 'discover') {
      s.send(JSON.stringify({ event: 'discover', games: Object.keys(games) }))
    }

    var game

    // Whatever you say goes, boss.
    if (games[room]) {
      game = games[room]
      sockets[room].push(s)
    }
    else {
      game = games[room] = new Game()
      game.hooks.onTurnFinish = () => sendState(room)
      game.hooks.onRoundFinish = () => sendState(room)
      game.hooks.onGameFinish = () => sendState(room)
      sockets[room] = [ s ]
    }

    if (event === 'start') {
      game.start()
      roomcast(room, {
        event: 'start'
      })
      sendState(room)
    }
    else if (event === 'join') {
      const user = new User({ id: id++ })
      game.addUser(user)
      roomcast(room, { event: 'new-player' })
    }
    else if (event === 'buy') {
      game.gameLoop({ type: 'buy' })
      sendState(room)
    }
    else if (event === 'finish') {
      game.gameLoop({ type: 'finish', campCardActionId: parsed.campCardActionId })
      sendState(room)
    }
  })
})

server.listen(process.env.PORT || 5000)
