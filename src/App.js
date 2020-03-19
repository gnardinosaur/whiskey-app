import React, { Component } from 'react';

class App extends Component {

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
        <div>
          {this.state.ragnar.map(el => (
          <div>{el[0]}</div>))}
        </div>
    );
  }
}

export default App;