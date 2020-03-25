import React from 'react';
import TopTen from './TopTen';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function Home() {
  return (
    <div>
      <div className='home-top'>
        <Container>
          <div className='home-top-content'>
            <h1>Welcome to Whiskey Club NYC.</h1>
            <h3>"Too much of anything is bad, but too much good whiskey is barely enough."</h3>
            <h3 className='author-quote'>- Mark Twain</h3>
            <Button id='home-btn' variant='contained'>Our Whiskies</Button>
          </div>
        </Container>
      </div>
      <Container id='home-bottom'>
        <p>Our Top 10</p>
        <TopTen />
      </Container>
    </div>
  )
};

export default Home;



