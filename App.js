import React from 'react';
import './App.global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Rate from './components/Rate/index';
import SubmissionResults from './components/SubmissionResults/index';
import OurWhiskies from './components/OurWhiskies/index';

class App extends React.Component {

  state = {
    submissionResults: {} // obj will either be be user submission data or google sheets error 
  };

  showSubmission = (payload) => {
    this.setState({ 
      submissionResults: payload 
    },
    this.changePath('/rate/submission'))
    // this.props.history.push('/rate/submission'))
  };

  changePath = (location) => {
    window.location.pathname = location
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/rate/submission' exact render={() => <SubmissionResults results={this.state.submissionResults} />} />
          <Route path='/rate' exact render={() => <Rate showSubmission={this.showSubmission} />} />
          <Route path='/our-whiskies' exact component={OurWhiskies} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;