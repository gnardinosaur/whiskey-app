import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';

function TopTen(props) {
  const [topTen, setTopTen] = useState([]);

  useEffect(() => {
    setTopTen(props.db['Our whiskies'].slice(0, 10))
  }, []);

  return (
    <div className='top-ten-container'>
      {topTen.map(el =>
        <div className='top-ten-item' key={el.Whiskey}>
          <a href={el.Link} target='_blank'>
            <div className='top-ten-card'>
              <img className='top-ten-card-img' src={el.Image} alt={el.Whiskey}/>
              <div className='top-ten-card-middle'>
                <div>#{el.Rank}</div>
                <br />
                <div>{el.Whiskey}</div>
                <div className='text-2'>{el.Theme}</div>
              </div> 
            </div>
          </a>
        </div>)}
    </div>
  )
};

export default withGoogleSheets('Our whiskies')(TopTen);