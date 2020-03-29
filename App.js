import React from 'react';
import GoogleSheetsProvider from 'react-db-google-sheets';
import Header from './components/Header';
import Home from './components/Home';
import TestForm from './components/TestForm';
import './App.css';

class App extends React.Component {

  render(){
    return(
      <GoogleSheetsProvider>
        <Header />
        {/* add routes to render components below */}
        <Home />
        <TestForm />
      </GoogleSheetsProvider>
    );
  }
}

export default App;