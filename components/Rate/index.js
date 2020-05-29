import React, { useState, useEffect } from 'react';
import BannerWrap from '../BannerWrap/index';
import RateForm from '../RateForm/index';
import styles from './styles.scss';

function Rate(props) {

  const [form, setForm] = useState({
    showForm: true,
    payload: {} // payload obj will either be user submission data or google sheets error 
  });

  // if showForm is false pass the payload to parent component, App, to render the SubmissionResults component
  useEffect(() => {
    if(!form.showForm) {
      props.showSubmission(form.payload)
    }
  }, [form])

  return (  
    <div className={styles.rate}>
      <BannerWrap />
      <p>Whiskey ratings</p>
      <p className={styles.smallText}>
        Access full ratings
        <a href={`https://docs.google.com/spreadsheets/d/${process.env.REACT_APP_GOOGLE_CLIENT_ID}/edit#gid=1971787420`} target='_blank'>here</a>
      </p>
      <RateForm setForm={setForm} />
    </div>
  )
};

export default Rate;