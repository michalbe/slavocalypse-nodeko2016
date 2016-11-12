var Game = function() {
  this.deck = new Array();
  this.activeDeck = new Array();
  this.trash = new Array();
  this.players = new Array();
  this.activePlayer = 0;
  this.startHooks = new Array();
  this.kartaKurwaWioski = {};
};

Game.prototype.gameLoop = function() {

}

Game.prototype.init = function () {
}

Game.prototype.activePlayerFinishGame = function () {
  if (this.activeDeck.length) {
    this.trash.push(this.activeDeck[0]);
  } else {
    //finishGame
  }
  this.activeDeck = shift(this.activeDeck);
  this.activeDeck.push(this.deck.pop());
}

var User = function() {
   this.health = 0;
   this.deck = {};
   this.deck.monsters = new Array();
   this.deck.dragons = new Array();
   this.deck.skill = new Array();
   this.deck.deity = new Array();
   this.coins = 5;
};
User.prototype.getHealth = function() {
  return this.health;
}
User.prototype.addHealth = function(val) {
  this.health += val;
}
User.prototype.getDefense = function() {
  var points = 0;

  for(var i=0;i < this.deck.monsters.length;i++) {
    points += this.deck.monsters[i].constDefense;
  }
  if (this.deck.monsters.length) points += this.deck.monsters[this.deck.monsters.length -1].temporaryDefense;

  for(var i=0;i < this.deck.dragons.length;i++) {
    points += this.deck.dragons[i].constDefense;
  }
  if (this.deck.dragons.length) points += this.deck.dragons[this.deck.dragons.length -1].temporaryDefense;

  for(var i=0;i < this.deck.skill.length;i++) {
    points += this.deck.skill[i].constDefense;
  }
  if (this.deck.skill.length) points += this.deck.skill[this.deck.skill.length -1].temporaryDefense;

  for(var i=0;i < this.deck.deity.length;i++) {
    points += this.deck.deity[i].constDefense;
  }
  if (this.deck.deity.length) points += this.deck.deity[this.deck.deity.length -1].temporaryDefense;

  return points;
}
User.prototype.getAttack = function() {
  var points = 0;

  for(var i=0;i < this.deck.monsters.length;i++) {
    points += this.deck.monsters[i].const_attack;
  }
  if (this.deck.monsters.length) points += this.deck.monsters[this.deck.monsters.length -1].temporaryAttack;

  for(var i=0;i < this.deck.dragons.length;i++) {
    points += this.deck.dragons[i].const_attack;
  }
  if (this.deck.dragons.length) points += this.deck.dragons[this.deck.dragons.length -1].temporaryAttack;

  for(var i=0;i < this.deck.skill.length;i++) {
    points += this.deck.skill[i].const_attack;
  }
  if (this.deck.skill.length) points += this.deck.skill[this.deck.skill.length -1].temporaryAttack;

  for(var i=0;i < this.deck.deity.length;i++) {
    points += this.deck.deity[i].const_attack;
  }
  if (this.deck.deity.length) points += this.deck.deity[this.deck.deity.length -1].temporaryAttack;

  return points;
}

User.prototype.getDeck = function() {
  return this.deck;
}
User.prototype.getCoins = function() {
  return this.coins;
}
User.prototype.addCoins = function(val) {
  this.coins += val;
}
User.prototype.getVictoryCoins = function() {
  //docelowo suma wszystkich victory pointow typeof int and typeof function(this) plus pary
  return 33;
}
