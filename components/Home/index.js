import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import TopTen from '../TopTen/index';
import Button from '@material-ui/core/Button';

const customStyles = {
  button: {
    marginTop: '3%',
    backgroundColor: 'whitesmoke',
    color: 'black'
  }
}

function Home(props) {
  // 'classes' object contains customStyles css 
  const { classes } = props 

  console.log(process.env.NODE_ENV)
  let api = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
  console.log(api);
  let doc = process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID;
  console.log(doc)
  

  return (
    <div>
      <div className={styles.homeTop}>
        <div>
          <div className={styles.homeTopContent}>
            <h1>Welcome to Whiskey Club NYC.</h1>
            <h3>"Too much of anything is bad, but too much good whiskey is barely enough."</h3>
            <h3 className={styles.authorQuote}>- Mark Twain</h3>
            <Link to='/our-whiskies' className='router-link'>
              <Button className={classes.button} variant='contained'>Our Whiskies</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.homeBottom}>
        <p>Our Top 10</p>
        {/* <TopTen /> */}
      </div>
    </div>
  )
};

export default withStyles(customStyles)(Home);



