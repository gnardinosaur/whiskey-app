import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

function SubmissionResults(props) {
  const [responseData, setResults] = useState({});

  useEffect(() => {
    setResults(props.successData);
  }, []);

  return (
    <div className={styles.results}>
      <p className={styles.title}>Your Submission</p>
      <p className={styles.subData}>Your Name - {<span>{responseData[1]}</span>}</p>
      <p className={styles.subData}>Month - {<span>{responseData[2]}</span>}</p>
      <p className={styles.subData}>Year - {<span>{responseData[3]}</span>}</p>
      <p className={styles.subData}>Whiskey #1 - <span>{responseData[4]}</span></p>
      <p className={styles.subData}>Whiskey #2 - <span>{responseData[5]}</span></p>
      <p className={styles.subData}>Whiskey #3 - <span>{responseData[6]}</span></p>
      {responseData[7] && <p className={styles.subData}>Whiskey #4 - <span>{responseData[7]}</span></p>}
      {responseData[8] && <p className={styles.subData}>Whiskey #5 - <span>{responseData[8]}</span></p>}
    </div>
  )
};

export default SubmissionResults;