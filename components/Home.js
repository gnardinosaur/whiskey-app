import React from 'react';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <div className='home'>
      <div>
        <h1>Welcome to Whiskey Club NYC.</h1>
        <h3>"Too much of anything is bad, but too much good whiskey is barely enough."</h3>
        <h3> - Mark Twain</h3>
      </div>
      <Button id='home-btn' variant='contained'>Our Whiskies</Button>
    </div>
  )
};

export default Home;



