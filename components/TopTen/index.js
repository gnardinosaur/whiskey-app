import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import styles from './styles.scss';

function TopTen(props) {
  const [topTen, setTopTen] = useState([]);

  // read top ten whiskies from Google sheet --> top ten links and images are handled within the Google sheet
  useEffect(() => {
    setTopTen(props.db['Our whiskies'].slice(0, 10))
  }, []);

  return (
    <div className={styles.topTenContainer}>
      {topTen.map(el =>
        <div className={styles.topTenItem} key={el.Whiskey}>
          <a href={el.Link} target='_blank'>
            <div className={styles.topTenCard}>
              <img src={el.Image} alt={el.Whiskey}/>
              <div className={styles.topTenCardMiddle}>
                <div>#{el.Rank}</div>
                <br />
                <div>{el.Whiskey}</div>
                <div className={styles.themeText}>{el.Theme}</div>
              </div> 
            </div>
          </a>
        </div>)}
    </div>
  )
};

export default withGoogleSheets('Our whiskies')(TopTen);