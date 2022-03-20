import React from 'react';
import './App.global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Rate from './components/Rate/index';
import Whiskies from './components/Whiskies/index';
import NotFound from './components/NotFound/index';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/rate' exact component={Rate} />
          <Route path='/whiskies' exact component={Whiskies} />
          <Route path='/' exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;