import React from 'react';
import GoogleSheetsProvider from 'react-db-google-sheets';
import Header from './Header';
import Home from './Home';
import '../App.css';

class App extends React.Component {

  render(){
    return(
      <GoogleSheetsProvider>
        <Header />
        {/* add routes to render components below */}
        <Home />
      </GoogleSheetsProvider>
    );
  }
}

export default App;