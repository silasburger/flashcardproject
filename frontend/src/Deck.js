import React, { Component } from 'react';
import Card from './Card';

class Deck extends Component {
  static defaultProps = {
    cardsToAsk: [
      { question: "What's your favorite food?", answer: 'pasta' },
      { question: "What's your favorite drink?", answer: 'water' }
    ]
  };

  constructor(props) {
    super(props);
    this.state = { currentCardIndex: 0 };
    this.getNextCard = this.getNextCard.bind(this);
  }

  // Change state to get the next card
  getNextCard() {
    this.setState(st => ({ currentCardIndex: st.currentCardIndex + 1 }));
  }

  render() {
    let currentCard = this.props.cardsToAsk[this.state.currentCardIndex];
    return (
      <div className="">
        <Card {...currentCard} getNextCard={this.getNextCard} />
      </div>
    );
  }
}

export default Deck;
