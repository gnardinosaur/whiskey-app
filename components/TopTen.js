import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  flexItem: {
    padding: '.5em',
    margin: '.2em',
    flex: '0 0 calc(50% - 10px)'
  },
  cardMedia: {
    width: '100%',
    height: 'auto',
    opacity: 1,
    transition: '.5s ease',
  },
  card: {
    height: 500,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: '#d3d3d3'
  },
  cardMiddle: {
    transition: '.5s ease',
    opacity: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  cardText: {
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  cardText2: {
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
    paddingTop: '5%'
  }
});

function TopTen(props) {
  const classes = useStyles();
  const [topTen, setTopTen] = useState([]);

  useEffect(() => {
    setTopTen(props.db['Our whiskies'].slice(0, 10))
  }, []);

  return (
    <div className={classes.flexContainer}>
      {topTen.map(el =>
        <div className={classes.flexItem} key={el.Whiskey}>
          <a href={el.Link} target='_blank'>
            <div id='top-ten-card' className={classes.card}>
              <img id='top-ten-card-img' className={classes.cardMedia} src={el.Image} alt={el.Whiskey}/>
              <div id='top-ten-card-middle' className={classes.cardMiddle}>
                <div className={classes.cardText}>#{el.Rank}</div>
                <br />
                <div className={classes.cardText}>{el.Whiskey}</div>
                <div className={classes.cardText2}>{el.Theme}</div>
              </div> 
            </div>
          </a>
        </div>)}
    </div>
  )
};

export default withGoogleSheets('Our whiskies')(TopTen);