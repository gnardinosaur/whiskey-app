import React from 'react';
import './App.global.scss';
import { Switch, Route } from 'react-router-dom';
import GoogleSheetsProvider from 'react-db-google-sheets';
import Header from './components/Header/index';
import MobileHeader from './components/MobileHeader/index';
import Home from './components/Home/index';
import Rate from './components/Rate/index';
import SubmissionResults from './components/SubmissionResults/index';
import OurWhiskies from './components/OurWhiskies';

class App extends React.Component {

  state = {
    submissionResults: {} // obj will either be be user submission data or google sheets error 
  };

  showSubmission(payload) {
    this.setState({ submissionResults: payload })
      // this.props.history.push('/rate/submission'));
  };

  render() {
    return (
      <Switch>
        {/* wrapped in GoogleSheets HOC to read sheet */}
        <GoogleSheetsProvider> 
          {window.innerWidth > 415? <Header /> : <MobileHeader />}
          <Route path='/rate/submission' exact render={() => <SubmissionResults results={this.state.submissionResults} />} />
          <Route path='/rate' exact render={() => <Rate showSubmission={this.showSubmission} />} />
          <Route path='/our-whiskies' exact component={OurWhiskies} />
          <Route path='/' exact component={Home} />
        </GoogleSheetsProvider>
      </Switch>
    );
  }
}

export default App;