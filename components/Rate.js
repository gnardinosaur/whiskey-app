import React, { useState, useEffect } from 'react';
import BannerWrap from './BannerWrap';
import RateForm from './RateForm';

function Rate(props) {
  const SPREADSHEET_ID = '1RSuvv3vVcr7xFm29P-2sbTGKCqs_mqRqDHeGzM9l-jA';
  const CLIENT_ID = '957948898145-tsr1r2k0bcjiajemaqgajd3j2sqs21a0.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyBpL_uFNZj6-xqT3w5R8pvLdHN7CUqPadM';
  const SCOPE = "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets";
  const range = 'test';

  const [input, setInput] = useState('');

  // useEffect(() => {
  //   initClient()
  // }, []);
  
  //initialize Google API
  function initClient() {
    gapi.load("client:auth2", authenticate)
  };

  //provide 0Auth credentials
  function authenticate() {
    gapi.client.init({
      'client_id': CLIENT_ID,
      'apiKey': API_KEY,
      'scope': SCOPE,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
    })
    .then(googleSignIn)
  };

  //sign-in using 0Auth with scopes to read/write to sheets API
  function googleSignIn() {
    return gapi.auth2.getAuthInstance()
      .signIn({scope: SCOPE})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); })
  }
  
  return (
    <div className='rate'>
      <BannerWrap />
      <p>Whiskey ratings</p>
      <p id='rate-small-text'>Access full ratings <a href='https://docs.google.com/spreadsheets/d/1RSuvv3vVcr7xFm29P-2sbTGKCqs_mqRqDHeGzM9l-jA/edit#gid=1971787420' target='_blank'>here</a></p>
      <RateForm />
    </div>
  )
}

export default Rate;