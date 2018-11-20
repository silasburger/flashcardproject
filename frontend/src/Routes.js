import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Deck from './Deck';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/deck" render={() => <Deck />} />
        <Route path="/" render={() => <Homepage />} />
      </Switch>
    );
  }
}

export default Routes;