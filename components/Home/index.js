import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import Layout from '../Layout/index';
import TopTen from '../TopTen/index';
import Button from '@material-ui/core/Button';

function Home(props) {

  return (
    <div>
      <Layout>
        <div className={styles.homeTop}>
          <div>
            <div className={styles.homeTopContent}>
              <h1>Welcome to Whiskey Club NYC</h1>
              <h3>"Too much of anything is bad, but too much good whiskey is barely enough."</h3>
              <h3 className={styles.authorQuote}>- Mark Twain</h3>
              <Link to='/our-whiskies' className='router-link'>
                <Button 
                  className={styles.whiskeyButton} 
                  variant='contained'
                >
                  Our Whiskies
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.homeBottom}>
          <p>Our Top 10</p>
          <TopTen />
        </div>
      </Layout>
    </div>
  )
};

export default Home;



