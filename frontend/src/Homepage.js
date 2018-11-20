import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>HELLO WELCOME TO OUR APP :)</h1>
        <Link to="/deck">
          <h4>To Deck</h4>
        </Link>
      </div>
    );
  }
}

export default Homepage;
