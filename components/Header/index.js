import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';
import classnames from 'classnames';

import styles from './styles.scss';

const LINKS = [
  {text: 'Home', href: '/'},
  {text: 'Our Whiskeys', href: '/our-whiskies'},
  {text: 'Rate', href: '/rate'},
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath =  window && window.location.pathname;

  // rebuild in a react-y way (see Trello board for link)
  useEffect(() => {
    window.addEventListener('scroll', throttle(() => {
      if(window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 100));
  }, []);

  return console.log(currentPath) || (
    <div className={classnames(
      styles.header,
      isScrolled && styles.scrolled
    )}>
      <Link to='/' className='router-link'><h1>Whiskey Club NYC</h1></Link>
      <div>
        {LINKS.map(link => (
          <Link to={link.href} className='router-link'>
            <div className={classnames(
              styles.navLink,
              isScrolled && styles.scrolled,
              currentPath === link.href && styles.active
            )}>
              {link.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Header;


