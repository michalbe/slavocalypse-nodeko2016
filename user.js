'use strict';
var User = function(id) {
   this.health = 0;
   this.deck = {};
   this.deck.monsters = new Array();
   this.deck.items = new Array();
   this.deck.skill = new Array();
   this.deck.deity = new Array();
   this.coins = 5;
   this.id = id;
};
User.prototype.getHealth = function() {
  return this.health;
}
User.prototype.addHealth = function(val) {
  this.health += val;
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

  return points;
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

  return points;
}

User.prototype.addCard = function(card) {

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
exports.User = User;
