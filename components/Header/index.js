import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../../constants.js';
import classnames from 'classnames';
import styles from './styles.scss';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath =  window && window.location.pathname;

  useEffect(() => {
    function onScroll() {
        if(window.scrollY > 70) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll); // remove event listener when component is unmounted
  }, []);

  return (
    <div className={classnames(
      styles.header,
      isScrolled && styles.scrolled
    )}>
      <Link to='/' className='router-link'><h1>Whiskey Club NYC</h1></Link>
      <div className={styles.pageLinks}>
        {LINKS.map(link => (
          <Link key={link.text} to={link.href} className='router-link'>
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


