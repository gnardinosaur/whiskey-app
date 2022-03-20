import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

function TopTen() {
  const [topTen, setTopTen] = useState([]);

  const defaultImageUrl = 'https://i.imgur.com/TyYV6pr.jpg';

  // read top ten whiskies from Google sheet --> top ten links and images are handled within the Google sheet
  useEffect(() => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/values/Our whiskies!A2:E11?key=${process.env.REACT_APP_GOOGLE_SHEETS_API_KEY}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => setTopTen(data.values))
  }, []);

  return (
    <div className={styles.topTenContainer}>
      {topTen.map(el =>
        <div className={styles.topTenItem} key={el[0]}>
          <a href={el[4]} target='_blank'>
            <div className={styles.topTenCard}>
              <img src={el[3] || defaultImageUrl} alt={el[1]}/>
              <div className={styles.topTenCardMiddle}>
                <div>#{el[0]}</div>
                <br />
                <div>{el[1]}</div>
                <div className={styles.themeText}>{el[2]}</div>
              </div> 
            </div>
          </a>
        </div>
      )}
    </div>
  )
};

export default TopTen;