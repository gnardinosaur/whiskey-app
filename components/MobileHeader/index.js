import React, {useState} from 'react';
import styles from './styles.scss';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

function MobileHeader() {
  const [change, setChange] = useState(false);

  function toggleClass() {
    setChange(!change)
  }

  return (
    <div className={styles.header}>
      <Link to='/' className='router-link'><h3>Whiskey Club NYC</h3></Link>
      <div className={styles.hamburger} onClick={toggleClass}>
        <div className={classnames(
          styles.bar,
          styles.one,
          change === true && styles.change
        )}></div>
        <div className={classnames(
          styles.bar,
          styles.two,
          change === true && styles.change
        )}></div>
        <div className={classnames(
          styles.bar,
          styles.three,
          change === true && styles.change
        )}></div>
      </div>
    </div>
  )
};

export default MobileHeader;