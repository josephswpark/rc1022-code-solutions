console.log('Lodash is loaded:', typeof _ !== 'undefined');
// create an array with 4 objects with name & hand property
// assign null to hand for now because it will be assigned later
// create arrays with ranks, suits
//  create an empty array to hold a deck
// create a function that creates 52 card deck
// create a for loop to iterate through each index
// reassign the randomized index to the new index
// Use a method that would randomize the deck - Math.floor(Math.random() * number)
// assign the random to each index
// deal two cards to each player. no two players should be able to receive the same card
// create a function deal()
// create a for loop to interate through the players object
// need to get the first two array to deal to each player - use .splice()
// assign two cards to players[i].hand
// return players

var players = [
  { name: 'Joseph', hand: null },
  { name: 'Tiffany', hand: null },
  { name: 'David', hand: null },
  { name: 'Eunice', hand: null }
];

var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
var suit = ['clubs', 'diamond', 'hearts', 'spades'];
var deck = [];

function cardDeck() {
  for (var a = 0; a < rank.length; a++) {
    for (var i = 0; i < suit.length; i++) {
      var card = { rank: rank[a], suit: suit[i] };
      deck.push(card);
    }
  }
  return deck;
}
console.log(cardDeck());

function shuffle(deck) {
  for (var i = 0; i < deck.length; i++) {
    var shuffleDeck = Math.floor(Math.random() * deck.length);
    deck[i] = deck[shuffleDeck];
  }
  return deck;
}

console.log(shuffle(deck));

function deal(deck) {
  for (var i = 0; i < players.length; i++) {
    var dealedCards = deck.splice(0, 2);
    players[i].hand = dealedCards;
  }
  return players;
}
console.log(deal(deck));
