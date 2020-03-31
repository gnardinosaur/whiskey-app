import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    height: 500,
    opacity: 1,
    display: 'block',
    width: '100%',
    transition: '.5s ease',
  }
});

function linkOut(e) {
  window.open(e.target.closest('#top-ten-card').dataset.link, '_blank')
}

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
          <Card id='top-ten-card' data-link={el.Link} onClick={linkOut}>
            <CardMedia id='top-ten-card-img' className={classes.card} image={el.Image} />
            <div className='top-ten-card-middle'>
              <div className='top-ten-card-text'>#{el.Rank}</div>
              <br />
              <div className='top-ten-card-text'>{el.Whiskey}</div>
              <div className='top-ten-card-text-2'>{el.Theme}</div>
            </div> 
          </Card>
        </Grid>)}
    </Grid>
  )
};

export default withGoogleSheets('Our whiskies')(TopTen);