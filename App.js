import React from 'react';
import './App.global.scss';
import { Switch, Route } from 'react-router-dom';
import GoogleSheetsProvider from 'react-db-google-sheets';
import Header from './components/Header/index';
import MobileHeader from './components/MobileHeader/index';
import Home from './components/Home/index';
import Rate from './components/Rate/index';
import OurWhiskies from './components/OurWhiskies';

class App extends React.Component {

  render() {
    return (
      <Switch>
        {/* wrapped in GoogleSheets HOC to read values */}
        <GoogleSheetsProvider> 
          {window.innerWidth > 415? <Header /> : <MobileHeader />}
          <Route path='/rate' exact component={Rate} />
          <Route path='/our-whiskies' exact component={OurWhiskies} />
          <Route path='/' exact component={Home} />
        </GoogleSheetsProvider>
      </Switch>
    );
  }
}

export default App;