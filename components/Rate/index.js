import React, { useState } from 'react';
import BannerWrap from '../BannerWrap/index';
import RateForm from '../RateForm/index';
import styles from './styles.scss';

function Rate(props) {

  const [form, setForm] = useState({
    showForm: true,
    payload: {} // payload obj will either be user submission data or google sheets error 
  });

  return (  
    <div className={styles.rate}>
      <BannerWrap />
      <p>Whiskey ratings</p>
      <p className={styles.smallText}>
        Access full ratings
        <a href='https://docs.google.com/spreadsheets/d/1RSuvv3vVcr7xFm29P-2sbTGKCqs_mqRqDHeGzM9l-jA/edit#gid=1971787420' target='_blank'>here</a>
      </p>
      {form.showForm ? <RateForm setForm={setForm}/> : props.showSubmission(form.payload) }
    </div>
  )
};

export default Rate;