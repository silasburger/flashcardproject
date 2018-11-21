import React, { Component } from 'react';
import CardList from './CardList';
import rememberlyApi from './rememberlyApi';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  // static defaultProps = {
  //   cards: [
  //     { question: "What's your favorite food?", answer: 'pasta' },
  //     { question: "What's your favorite drink?", answer: 'water' }
  //   ]
  // };

  async componentDidMount() {
    const {cards} = await rememberlyApi.getCards();
    this.setState({ cards });
  }

  render() {
    return <CardList cards={this.state.cards} />;
  }
}

export default Deck;
