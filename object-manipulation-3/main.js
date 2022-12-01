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
// calculate score
// create an array for storage
// create a for loop to iterate through each players object
// assign 0 to totalScore to update the score depending on the card
// create another for loop to interate through the player's hand's rank
// if the rank = ace, update totalscore to 11
// else if the rank = jack, queen, king then update totalscore to 10
// else update the total score of the other numbers but turn that string to integer
// push the total score into the array
// repeat until the for loop conditionals is not met
// return the array
// calculate the highest score of the array from scores()
// create a function to get the winner
// create a for loop to check through the scores
// if the scores in the array is strictly equal to the highest score, show the winner!

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
cardDeck();

function shuffle(deck) {
  for (var i = 0; i < deck.length; i++) {
    var shuffleDeck = Math.floor(Math.random() * deck.length);
    deck[i] = deck[shuffleDeck];
  }
  return deck;
}
shuffle(deck);

function deal(deck) {
  for (var i = 0; i < players.length; i++) {
    var dealedCards = deck.splice(0, 2);
    players[i].hand = dealedCards;
  }
  return players;
}
deal(deck);

function scores() {
  var handArray = [];
  for (var i = 0; i < players.length; i++) {
    var totalScore = 0;
    for (var x = 0; x < players[i].hand.length; x++) {
      if (players[i].hand[x].rank === 'Ace') {
        totalScore += 11;
      } else if (players[i].hand[x].rank === 'Jack' || players[i].hand[x].rank === 'Queen' || players[i].hand[x].rank === 'King') {
        totalScore += 10;
      } else {
        totalScore += parseInt(players[i].hand[x].rank);
      }
    }
    handArray.push(totalScore);
  }
  return handArray;
}

scores();

var highestScore = _.max(scores());

function winner() {
  for (var w = 0; w < scores().length; w++) {
    if (scores()[w] === highestScore) {
      console.log('Players:', players);
      console.log('Scores:', scores());
      console.log('Winner\'s score:', highestScore);
      console.log('Winner\'s name:', players[w].name);
    }
  }
}
winner();
