import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { isFlipped: false };
    this.handleNextCard = this.handleNextCard.bind(this);
    this.handleFlipCard = this.handleFlipCard.bind(this);
  }

  handleNextCard() {
    setTimeout(() => this.props.getNextCard(), 500);
  }

  handleFlipCard() {
    this.setState(st => ({ isFlipped: !st.isFlipped }));
  }

  render() {
    let isActive = this.state.isFlipped ? 'is-flipped' : '';
    return (
      <div className={`flip-card ${isActive}`} onClick={this.handleFlipCard}>
        <div className={`flip-card-inner `}>
          <div className="flip-card-front">
            {/* Question to Ask  */}
            {this.props.question}
          </div>
          <div className="flip-card-back">
            {/* Answer to Question */}
            {this.props.answer}
            <div className="Buttons">
              {/* <button>Again</button>
              <button>Good</button>
              <button>Easy</button> */}
              <button onClick={this.handleNextCard}>Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
