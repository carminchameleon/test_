import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Board from './Pages/Board';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Board} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
