import React from 'react';
import { Link } from 'react-router-dom';
import TopTen from '../TopTen/index';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import styles from './styles.scss';
import { withStyles } from '@material-ui/core/styles';

const customStyles = {
  button: {
    marginTop: '3%',
    backgroundColor: 'whitesmoke',
    color: 'black'
  }
}

function Home(props) {
  const { classes } = props 
  return (
    <div>
      <div className={styles.homeTop}>
        <Container>
          <div className={styles.homeTopContent}>
            <h1>Welcome to Whiskey Club NYC.</h1>
            <h3>"Too much of anything is bad, but too much good whiskey is barely enough."</h3>
            <h3 className={styles.authorQuote}>- Mark Twain</h3>
            <Link to='/our-whiskies' className='router-link'>
              <Button className={classes.button} variant='contained'>Our Whiskies</Button>
            </Link>
          </div>
        </Container>
      </div>
      <div className={styles.homeBottom}>
        <p>Our Top 10</p>
        <TopTen />
      </div>
    </div>
  )
};

export default withStyles(customStyles)(Home);



