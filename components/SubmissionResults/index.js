import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

function SubmissionResults(props) {
  const [results, setResults] = useState({});

  useEffect(() => {
    setResults(props.results);
  }, []);

  return (
    <div className={styles.results}>
      <p className={styles.title}>Your Submission</p>
      <p className={styles.subData}>Your Name - {<span>{results[1]}</span>}</p>
      <p className={styles.subData}>Month - {<span>{results[2]}</span>}</p>
      <p className={styles.subData}>Year - {<span>{results[3]}</span>}</p>
      <p className={styles.subData}>Whiskey #1 - <span>{results[4]}</span></p>
      <p className={styles.subData}>Whiskey #2 - <span>{results[5]}</span></p>
      <p className={styles.subData}>Whiskey #3 - <span>{results[6]}</span></p>
      {results[7] && <p className={styles.subData}>Whiskey #4 - <span>{results[7]}</span></p>}
      {results[8] && <p className={styles.subData}>Whiskey #5 - <span>{results[8]}</span></p>}
    </div>
  )
};

export default SubmissionResults;