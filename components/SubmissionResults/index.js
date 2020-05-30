import React, { useState, useEffect } from 'react';
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
      return <p className={styles.subData} key={rating + idx}>Whiskey #{idx + 1} - <span>{rating}</span></p>
    })

  return (
    <div className={styles.results}>
      <p className={styles.title}>Your Submission</p>
      <p className={styles.subData}>Your Name - {<span>{results.name}</span>}</p>
      <p className={styles.subData}>Month - {<span>{results.month}</span>}</p>
      <p className={styles.subData}>Year - {<span>{results.year}</span>}</p>
      {ratings}
    </div>
  )
};

export default SubmissionResults;