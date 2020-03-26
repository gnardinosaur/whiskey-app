import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  media: {
    height: 500
  }
}));

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
          <Card>
            <CardHeader title={el.Whiskey} />
            <CardMedia 
              className={classes.media}
              image={el.Image}
            />  
          </Card>
        </Grid>)}
    </Grid>
  )
};

export default withGoogleSheets('Our whiskies')(TopTen);