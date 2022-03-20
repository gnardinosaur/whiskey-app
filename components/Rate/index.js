import React, { useState } from 'react';
import Layout from '../Layout/index';
import HeaderImage from '../HeaderImage/index';
import RateForm from '../RateForm/index';
import SubmissionResults from '../SubmissionResults/index';
import GooglePostError from '../GooglePostError/index';
import styles from './styles.scss';

function Rate() {

  const [sheetsResponse, setSheetsResponse] = useState({
    show: 'rate',
    successData: [],
    errorMessage: ''
  });

  function pageBody() {
    switch(sheetsResponse.show) {
      case 'rate':
        return <RateForm setSheetsResponse={setSheetsResponse}/>
      case 'success': 
        return <SubmissionResults successData={sheetsResponse.successData} />
      case 'fail':
        return <GooglePostError message={sheetsResponse.errorMessage} />
    }
  };

  return (
    <div>
      <Layout>
        <HeaderImage />
        <div className={styles.rate}>
          <h3>Whiskey ratings</h3>
          <h5>
            Access full ratings
            <a href={`https://docs.google.com/spreadsheets/d/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/edit#gid=1971787420`} target='_blank'>here</a>
          </h5> 
          {pageBody()}
        </div>
      </Layout>
    </div>
  )
};

export default Rate;