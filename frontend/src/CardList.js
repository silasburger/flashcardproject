import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
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
    let currentCard = this.props.cards[this.state.currentCardIndex];
    return <Card {...currentCard} getNextCard={this.getNextCard} />;
  }
}

export default CardList;
