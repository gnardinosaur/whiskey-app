import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Header() {
  const [scrollClassHeader, setScrollClassHeader] = useState(false);
  const [scrollIDHeaderBtn, setScrollIDHeaderBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function() {
      if(window.scrollY > 100) {
        setScrollClassHeader(!scrollClassHeader)
        setScrollIDHeaderBtn(!scrollIDHeaderBtn)
      } else {
        setScrollClassHeader(false)
        setScrollIDHeaderBtn(false)
      }
    }) 
  }, []);

  
  return (
    <div className={scrollClassHeader ? 'header-scroll' : 'header-top'}>
      <Link to='/' className='router-link'><h1>Whiskey Club NYC</h1></Link>
      <div>
        <Link to='/' className='router-link'>
          <Button variant="outlined" id={scrollIDHeaderBtn ? 'header-scroll-btn' : 'header-top-btn'}>Home</Button>
        </Link>
        <Link to='/whiskies' className='router-link'>
          <Button variant="outlined" id={scrollIDHeaderBtn ? 'header-scroll-btn' : 'header-top-btn'}>Our Whiskies</Button>
        </Link>
        <Link to='/rate' className='router-link'>
          <Button variant="outlined" id={scrollIDHeaderBtn ? 'header-scroll-btn' : 'header-top-btn'}>Rate</Button>
        </Link>
      </div>
    </div>
  )
};

export default Header;


