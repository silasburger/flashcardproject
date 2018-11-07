import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">What day is today?</div>
          <div class="flip-card-back">Fuck off.</div>
        </div>
      </div>
    );
  }
}

export default Card;
