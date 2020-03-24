import React from 'react';
import Top10 from './Top10';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function Home() {
  return (
    <div>
      <Container id='home-top'>
        <h1>Welcome to Whiskey Club NYC.</h1>
        <h3>"Too much of anything is bad, but too much good whiskey is barely enough."</h3>
        <h3> - Mark Twain</h3>
        <Button id='home-btn' variant='contained'>Our Whiskies</Button>
      </Container>
      <Container id='home-bottom'>
        <p>Our Top 10</p>
        <Top10 />
      </Container>
    </div>
  )
};

export default Home;



