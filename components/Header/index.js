import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
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
      if(window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }) 
  }, []);

  return (
    <div className={classnames(
      styles.header,
      isScrolled && styles.scrolled
    )}>
      <Link to='/' className='router-link'><h1>Whiskey Club NYC</h1></Link>
      <div>
        {LINKS.map(link => (
          <Link to={link.href} className='router-link'>
            <Button variant="outlined" className={classnames(styles.navLink, isScrolled && styles.scrolled)}>
              {link.text}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Header;


