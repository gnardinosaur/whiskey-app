import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import classnames from 'classnames';
import { throttle } from 'lodash';
import MobileNavMenu from '../MobileNavMenu/index'


function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [navState, setNavState] = useState({
    showX: false,
    showMenu: false
  });

  useEffect(() => {
    //if isScrolled === true & navState.showX ==== true remove isScrolled styles 
    window.addEventListener('scroll', throttle(() => {
      if(window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 100));
  }, []);

  function toggleHamburgerClass() {
    setNavState({
      showX: !navState.showX,
      showMenu: !navState.showMenu
    });
  };

  return (
    <div>
      <div className={classnames(
        styles.header,
        !navState.showX && isScrolled && styles.scrolled,
        navState.showMenu && styles.hide
        )}>
        <Link to='/' className='router-link'><h3 className={classnames(
          navState.showMenu && styles.hide
          )}>
            Whiskey Club NYC
          </h3>
        </Link>
        <div className={styles.hamburger} onClick={toggleHamburgerClass}>
          <div className={classnames(
            styles.bar,
            styles.one,
            !navState.showX && isScrolled && styles.scrolled,
            navState.showX && styles.showX
          )}></div>
          <div className={classnames(
            styles.bar,
            styles.two,
            !navState.showX && isScrolled && styles.scrolled,
            navState.showX && styles.showX
          )}></div>
          <div className={classnames(
            styles.bar,
            styles.three,
            !navState.showX && isScrolled && styles.scrolled,
            navState.showX && styles.showX
          )}></div>
        </div>
      </div>
      {/* navigation menu  */}
      <MobileNavMenu show={navState.showMenu} click={toggleHamburgerClass} />
    </div>
  )
};

export default MobileHeader;