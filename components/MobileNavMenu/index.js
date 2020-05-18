import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../../constants/links';
import styles from './styles.scss';
import classnames from 'classnames';


function MobileNavMenu(props) {
  let show = props.show
  return (
    <div className={classnames(
      styles.navMenu,
      show && styles.show
    )}>
      {LINKS.map(link => (
        <Link key={link.text} to={link.href} className='router-link'>
          <div className={classnames(
            styles.link,
            show && styles.show
          )}
          onClick={props.click}
          >
            {link.text}
          </div>
        </Link>
      ))}
    </div>
  )
};

export default MobileNavMenu;