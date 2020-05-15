import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../../constants/links';
import styles from './styles.scss';

function MobileNavMenu() {
  return (
    <div className={styles.navMenu}>
      {LINKS.map(link => (
        <Link key={link.text} to={link.href} className='router-link'>
          <div>{link.text}</div>
        </Link>
      ))}
    </div>
  )
};

export default MobileNavMenu;