'use strict';
var User = function(id) {
   this.health = 0;
   this.deck = {};
   this.deck.monsters = new Array();
   this.deck.items = new Array();
   this.deck.skill = new Array();
   this.deck.deity = new Array();
   this.coins = 5;
   this.additionalDefense = 0
   this.additionalAttack = 0
   this.id = id;
};
User.prototype.getHealth = function() {
  return this.health;
}
User.prototype.addHealth = function(val) {
  this.health += val;
  if (this.health>0) this.health = 0;
}
User.prototype.getDefense = function() {
  var points = 0;

  for(let i=0;i < this.deck.monsters.length;i++) {
    points += this.deck.monsters[i].constDefense;
  }
  if (this.deck.monsters.length) points += this.deck.monsters[0].temporaryDefense;

  for(let i=0;i < this.deck.items.length;i++) {
    points += this.deck.items[i].constDefense;
  }
  if (this.deck.items.length) points += this.deck.items[0].temporaryDefense;

  for(let i=0;i < this.deck.skill.length;i++) {
    points += this.deck.skill[i].constDefense;
  }
  if (this.deck.skill.length) points += this.deck.skill[0].temporaryDefense;

  for(let i=0;i < this.deck.deity.length;i++) {
    points += this.deck.deity[i].constDefense;
  }
  if (this.deck.deity.length) points += this.deck.deity[0].temporaryDefense;

  return points + this.additionalDefense;
}
User.prototype.getAttack = function() {
  var points = 0;

  for(let i=0;i < this.deck.monsters.length;i++) {
    points += this.deck.monsters[i].constAttack;
  }
  if (this.deck.monsters.length) points += this.deck.monsters[0].temporaryAttack;

  for(let i=0;i < this.deck.items.length;i++) {
    points += this.deck.items[i].constAttack;
  }
  if (this.deck.items.length) points += this.deck.items[0].temporaryAttack;

  for(let i=0;i < this.deck.skill.length;i++) {
    points += this.deck.skill[i].constAttack;
  }
  if (this.deck.skill.length) points += this.deck.skill[0].temporaryAttack;

  for(let i=0;i < this.deck.deity.length;i++) {
    points += this.deck.deity[i].constAttack;
  }
  if (this.deck.deity.length) points += this.deck.deity[0].temporaryAttack;

  return points + this.additionalAttack;
}

User.prototype.addCard = function(card) {
  //not working yet...  ...working in game object its so wrong...
}

User.prototype.getDeck = function() {
  return this.deck;
}

User.prototype.getCoins = function() {
  return this.coins;
}

User.prototype.addCoins = function(val) {
  this.coins += val;
  if (this.coins < 0) this.coins = 0;
}

User.prototype.getVictoryPoints = function(game) {
  var victoryPoints = this.health;
  victoryPoints += Math.min(this.deck.skill.length, this.deck.monsters.lenght);

  for(let i=0;i < this.deck.monsters.length;i++) {
    victoryPoints += this.deck.monsters[i].victoryPoints;
  }

  for(let i=0;i < this.deck.items.length;i++) {
    victoryPoints += this.deck.items[i].victoryPoints;
  }

  for(let i=0;i < this.deck.skill.length;i++) {
    victoryPoints += this.deck.skill[i].victoryPoints;
  }

  for(let i=0;i < this.deck.deity.length;i++) {
    victoryPoints += this.deck.deity[i].victoryPoints;
  }
//  victoryPoints += game.campCard.victoryPointsAction(game, this);

  return victoryPoints;
}

User.prototype.trashCard = function (type) {
  switch (type) {
    case "monster":
      return this.deck.monsters.shift();
      break;
    case "item":
      return this.deck.items.shift();
      break;
    case "skill":
      return this.deck.skill.shift();
      break;
    case "deity":
      return this.deck.deity.shift();
      break;
  }
}
exports.User = User;
