import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

function TopTen(props) {
  const [topTen, setTopTen] = useState([]);

  // read top ten whiskies from Google sheet --> top ten links and images are handled within the Google sheet
  useEffect(() => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/values/Our whiskies!A1:E11`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_GOOGLE_SHEETS_API_KEY}`,
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, []);

  return (
    <div className={styles.topTenContainer}>
      testing.
      {/* {topTen.map(el =>
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
        </div>)} */}
    </div>
  )
};

export default TopTen;