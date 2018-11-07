import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {/* Question to Ask  */}
            {this.props.question}
          </div>
          <div className="flip-card-back">
            {/* Answer to Question */}
            {this.props.answer}
            <div className="Buttons">
              <button>Again</button>
              <button>Good</button>
              <button>Easy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
