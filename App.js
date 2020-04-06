import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GoogleSheetsProvider from 'react-db-google-sheets';
import Header from './components/Header';
import Home from './components/Home';
import Rate from './components/Rate';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Switch>
        <GoogleSheetsProvider>
          <Header />
          <Route path='/rate' exact component={Rate} />
          <Route path='/' exact component={Home} />
        </GoogleSheetsProvider>
      </Switch>
    );
  }
}

export default App;