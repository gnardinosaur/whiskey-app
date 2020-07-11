import React, { useState } from 'react';
import Layout from '../Layout/index';
import BannerWrap from '../BannerWrap/index';
import RateForm from '../RateForm/index';
import SubmissionResults from '../SubmissionResults/index';
import styles from './styles.scss';

function Rate() {

  const [form, setForm] = useState({
    showForm: true,
    payload: {} // payload obj will either be user submission data or google sheets error 
  });

  return (  
    <div>
      <Layout>
        <BannerWrap />
        <div className={styles.rate}>
          <h3>Whiskey ratings</h3>
          <h5>
            Access full ratings
            <a href={`https://docs.google.com/spreadsheets/d/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/edit#gid=1971787420`} target='_blank'>here</a>
          </h5>
          {form.showForm ? <RateForm setForm={setForm} /> : <SubmissionResults results={form.payload} />}
        </div>
      </Layout>
    </div>
  )
};

export default Rate;