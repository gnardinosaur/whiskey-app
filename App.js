import React from 'react';
import './App.global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Rate from './components/Rate/index';
import OurWhiskies from './components/OurWhiskies/index';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/rate' exact render={() => <Rate showSubmission={this.showSubmission} />} />
          <Route path='/our-whiskies' exact component={OurWhiskies} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;