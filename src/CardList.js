import React, { Component } from 'react';
// import './CardList.css';
import Card from './Card';

class CardList extends Component {
  static defaultProps = {
    cardsToAsk: [
      { question: "What's your favorite food?", answer: 'pasta' },
      { question: "What's your favorite drink?", answer: 'water' }
    ]
  };

  render() {
    let cardsToAskArr = this.props.cardsToAsk.map(card => (
      <Card key={card.question} question={card.question} answer={card.answer} />
    ));

    return <div className="">{cardsToAskArr}</div>;
  }
}

export default CardList;
