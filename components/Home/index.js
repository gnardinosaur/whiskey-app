import React from 'react';
import { Link } from 'react-router-dom';
import TopTen from '../TopTen';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import styles from './styles.scss';


function Home() {
  return (
    <div>
      <div className={styles.homeTop}>
        <Container>
          <div className={styles.homeTopContent}>
            <h1>Welcome to Whiskey Club NYC.</h1>
            <h3>"Too much of anything is bad, but too much good whiskey is barely enough."</h3>
            <h3 className={styles.authorQuote}>- Mark Twain</h3>
            <Link to='/our-whiskies' className='router-link'>
              <Button id='home-btn' variant='contained'>Our Whiskies</Button>
            </Link>
          </div>
        </Container>
      </div>
      <Container id='home-bottom'>
        <p>Our Top 10</p>
        <TopTen />
      </Container>
    </div>
  )
};

export default Home;



