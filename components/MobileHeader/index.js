import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import classnames from 'classnames';
import MobileNavMenu from '../MobileNavMenu/index'


function MobileHeader() {
  const [navState, setNavState] = useState({
    showHamburger: false,
    showNav: false
  });

  function toggleHamburgerClass() {
    setNavState({
      showHamburger: !navState.showHamburger,
      showNav: !navState.showNav
    })
  }

  return (
    <div>
      <div className={styles.header}>
        <Link to='/' className='router-link'><h3 className={classnames(
          navState.showNav && styles.show
          )}>
            Whiskey Club NYC
          </h3>
        </Link>
        <div className={styles.hamburger} onClick={toggleHamburgerClass}>
          <div className={classnames(
            styles.bar,
            styles.one,
            navState.showHamburger && styles.showHamburger
          )}></div>
          <div className={classnames(
            styles.bar,
            styles.two,
            navState.showHamburger && styles.showHamburger
          )}></div>
          <div className={classnames(
            styles.bar,
            styles.three,
            navState.showHamburger && styles.showHamburger
          )}></div>
        </div>
      </div>
      {/* navigation menu  */}
      <div className={classnames(
        styles.navMenu,
        navState.showNav && styles.show
      )}>
        <MobileNavMenu />
      </div>
    </div>
  )
};

export default MobileHeader;