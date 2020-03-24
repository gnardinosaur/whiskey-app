import React from 'react';
import Header from './Header';
import Home from './Home';
import '../App.css';

class App extends React.Component {

  state = {
    ragnar: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/data')
    .then(resp => resp.json())
    .then(data => this.setState({ ragnar: data }))
  }  

  render(){
    return(
        <div className='app'>
          <Header />
          <Home />
          {/* below is how to render Google Sheets API */}
          {/* {this.state.ragnar.map((el, index) => (
          <div key={index}>{el[0]}</div>))} */}
        </div>
    );
  }
}

export default App;