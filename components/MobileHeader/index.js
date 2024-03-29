import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import classnames from 'classnames';
import MobileNavMenu from '../MobileNavMenu/index'


function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [navState, setNavState] = useState({
    showX: false,
    showMenu: false
  });

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
  }, [isScrolled]);

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
        !navState.showX && isScrolled && styles.scrolled, //if menu is displayed, do not apply isScrolled styles
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
            !navState.showX && isScrolled && styles.scrolled, //if menu is displayed, do not apply isScrolled styles
            navState.showX && styles.showX
          )}></div>
          <div className={classnames(
            styles.bar,
            styles.two,
            !navState.showX && isScrolled && styles.scrolled, //if menu is displayed, do not apply isScrolled styles
            navState.showX && styles.showX
          )}></div>
          <div className={classnames(
            styles.bar,
            styles.three,
            !navState.showX && isScrolled && styles.scrolled, //if menu is displayed, do not apply isScrolled styles
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