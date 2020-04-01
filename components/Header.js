import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <div className='header'>
      <h1>Whiskey Club NYC</h1>
      <div>
        <Link to='/' className='router-link'>
          <Button variant="outlined" id='header-btn'>Home</Button>
        </Link>
        <Link to='/whiskies' className='router-link'>
          <Button variant="outlined" id='header-btn'>Our Whiskies</Button>
        </Link>
        <Link to='/rate' className='router-link'>
          <Button variant="outlined" id='header-btn'>Rate</Button>
        </Link>
      </div>
    </div>
  )
}

export default Header;