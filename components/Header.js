import React from 'react';
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <div className='header'>
      <h1>Whiskey Club NYC</h1>
      <div>
        <Button variant="outlined" id='header-btn'>Home</Button>
        <Button variant="outlined" id='header-btn'>Our Whiskies</Button>
        <Button variant="outlined" id='header-btn'>Rate</Button>
      </div>
    </div>
  )
}

export default Header;