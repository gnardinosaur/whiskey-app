import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  cardMedia: {
    height: 500,
    opacity: 1,
    display: 'block',
    width: '100%',
    transition: '.5s ease',
  },
  card: {
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
    <Grid container justify='center' spacing={4}>
      {topTen.map(el =>
        <Grid item key={el.Whiskey} xs={6}>
          <a href={el.Link} target='_blank'>
            <Card id='top-ten-card' className={classes.card} >
              <CardMedia id='top-ten-card-img' className={classes.cardMedia} image={el.Image} />
              <div id='top-ten-card-middle' className={classes.cardMiddle}>
                <div className={classes.cardText}>#{el.Rank}</div>
                <br />
                <div className={classes.cardText}>{el.Whiskey}</div>
                <div className={classes.cardText2}>{el.Theme}</div>
              </div> 
            </Card>
          </a>
        </Grid>)}
    </Grid>
  )
};

export default withGoogleSheets('Our whiskies')(TopTen);