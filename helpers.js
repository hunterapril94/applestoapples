const deck = [
  {
    title: "Mark's Booty",
    description: "The answer to life, Universe and Everything"
  },
  {
    title: "hiking buckskin gulch",
    description: "a literally insane undertaking"
  },
  {
    title: "Gregsplaining",
    description: "the non-enzymatic lanolin denitrifies the endonuclease of the polysaccharide"
  },
  {
    title: "Seeds",
    description: "you gotta plant and nourish them"
  },
  {
    title: "stupid butthead trouble",
    description: "much worse than regular trouble"
  },
  {
    title:"nakedness",
    description: "there's a lot of it in marriage"
  },
  {
    title:"Uncle Bob's Treehouse", 
    description: "It is not garbage. You can go to heck."
  },
  {
    title:"GGE",
    description:"the first law of heaven"
  },
  {
    title: "Carrots",
    description: "100% of them are better not cooked"
  },
  {
    title: "Fireside chats",
    description: "Sit and have a seat and sit down and listen"
  },
]
const cardsInPlay = [];
const playedCards = [];
const players = [];
let turnNumber = 0;

const fetchGreen = function() {

}
const deal = function(numberOfCards) {

}
const playCard = function() {

}
const newTurn = function() {
if(turnNumber===0) {
  deal(7);
  turnNumber += 1
} else {
  deal(1);
  fetchGreen();
  turnNumber += 1;
  // player whose turn it is += 1
}
}
const areAllCardsIn = function() {
  if(playedCards.length !== players.length -1) {
    return;
  } else {
    // display cardsInPlay for player whose turn it is
  }
}

const reset = function() {
console.log(deck)
}

module.exports = {fetchGreen, playCard, newTurn, areAllCardsIn, reset}