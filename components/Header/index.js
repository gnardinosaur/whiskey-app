import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './styles.scss';

const LINKS = [
  {text: 'Home', href: '/'},
  {text: 'Our Whiskeys', href: '/our-whiskies'},
  {text: 'Rate', href: '/rate'},
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // rebuild in a react-y way (see Trello board for link)
  useEffect(() => {
    window.addEventListener('scroll', function() {
      if(window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }) 
  }, []);

  return (
    <div className={isScrolled ? styles['header-scroll'] : styles['header-top']}>
      <Link to='/' className='router-link'><h1>Whiskey Club NYC</h1></Link>
      <div>
        {LINKS.map(link => (
          <Link to={link.href} className='router-link'>
            <Button variant="outlined" id={isScrolled ? styles['header-scroll-btn'] : styles['header-top-btn']}>{link.text}</Button>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Header;


