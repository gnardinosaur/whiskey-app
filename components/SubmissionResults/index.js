import React, { useState, useEffect } from 'react';
import Layout from '../Layout/index'
import BannerWrap from '../BannerWrap/index';
import styles from './styles.scss';

function SubmissionResults(props) {

  const [results, setResults] = useState({});

  useEffect(() => {
    setResults(props.results);
  }, []);

  // used to render null on first load of component since results state will not yet be set 
  let ratings = results.ratings === undefined ? 
    null 
    :
    results.ratings.map((rating, idx) => {
      return <p className={styles.subData} key={rating + idx}>Whiskey #{idx + 1} - {rating}</p>
    })

  return (
    <div>
      <Layout>
        <BannerWrap />
        <div className={styles.results}>
          <p className={styles.title}>Your Submission</p>
          <p className={styles.subData}>Your Name - {results.name}</p>
          <p className={styles.subData}>Month - {results.month}</p>
          <p className={styles.subData}>Year - {results.year}</p>
          {ratings}
        </div>
      </Layout>
    </div>
  )
};

export default SubmissionResults;