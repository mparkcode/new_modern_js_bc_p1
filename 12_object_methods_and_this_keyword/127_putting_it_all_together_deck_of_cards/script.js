function makeDeck(){
  const deck = []
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for(let value of values.split(',')){
    for(let suit of suits){
      deck.push({value,suit})
    }
  }
  return deck;
}

const deck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck(){
    const {suits, values, deck} = this;
    for(let value of values.split(',')){
      for(let suit of suits){
        deck.push({value,suit})
      }
    }
  },
  drawCard(){
    const card = this.deck.pop();
    this.drawnCards.push(card)
    return card;
  },
  drawMultiple(numCards){
    const cards = []
    for(let i = 0; i < numCards; i++){
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle(){
    const {deck} = this
    for(let i = deck.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}


function shuffle(arr){
  for(let i = arr.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
    console.log(arr)
  }
}





const myDeck = {
  deck: [],
  drawnsCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck(){
    const {suits, values, deck} = this;
    values.split(',').forEach(value => (
      suits.forEach(suit => (
        deck.push({value,suit})
      ))
    ))
  },
  drawCard(){
    const card = this.deck.pop();
    drawnsCards.push(card);
    return card
  },
  drawMultiple(numCards){
    const cards = [];
    for(let i=0; i<numCards; i++){
      cards.push(this.deck.pop())
    }
    return cards
  },
  shuffle(){
    const {deck} = this
    for(let i = deck.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}


