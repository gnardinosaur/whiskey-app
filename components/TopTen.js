import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const test = [
  {name: 'outryder', img: 'https://cdn11.bigcommerce.com/s-7a906/images/stencil/750x750/products/10822/9891/Wyoming-Whiskey-Outryder__83899.1478882476.jpg?c=2&imbypass=on'},
  {name: 'tomintoul', img: 'https://d256619kyxncpv.cloudfront.net/gui/img/2015/07/02/10/2015070210_tomintoul_scotch_single_malt_aged_16_years_original.png'},
  {name: 'colkegan', img: 'https://www.craftspiritsxchange.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/colkegan_single_malt_resized.jpg'},
  {name: 'redbreast', img: 'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hd6/h8d/12244738670622.png'}
];

const useStyles = makeStyles(theme => ({
  media: {
    height: 500
  }
}));

function TopTen() {
  const classes = useStyles();
  return (
    <Grid container justify='center' spacing={4}>
      {test.map(el =>
        <Grid item key={el.name} xs={6}>
          <Card>
            <CardHeader title={el.name} />
            <CardMedia
              className={classes.media}
              image={el.img}
            />  
          </Card>
        </Grid>)}
    </Grid>
  )
};

export default TopTen;