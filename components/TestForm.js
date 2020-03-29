import React, { useState, useEffect } from 'react';

function TestForm(props) {
  const SPREADSHEET_ID = '1RSuvv3vVcr7xFm29P-2sbTGKCqs_mqRqDHeGzM9l-jA';
  const CLIENT_ID = '957948898145-tsr1r2k0bcjiajemaqgajd3j2sqs21a0.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyBpL_uFNZj6-xqT3w5R8pvLdHN7CUqPadM';
  const SCOPE = "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets";
  const range = 'test';

  const [input, setInput] = useState('');

  useEffect(() => {
    initClient()
  }, []);
  
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

  function googleSignIn() {
    return gapi.auth2.getAuthInstance()
      .signIn({scope: SCOPE})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); })
  }

  function execute() {
    return gapi.client.sheets.spreadsheets.values.append({
      "spreadsheetId": SPREADSHEET_ID,
      "range": range,
      "valueInputOption": "RAW",
      "resource": {
        "values": [
          [input]
        ]
      }
    })
    .then(function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
      },
      function(err) { console.error("Execute error", err); });
  };

  function handleSubmit(e) {
    e.preventDefault();
    execute();  
  };

  return (
    <div style={{ textAlign: 'center', padding: '10%' }}>
      <form onSubmit={handleSubmit}>
        <label style={{ padding: '1%' }}>test.</label>
        <input type='text' value={input} onChange={e => setInput(e.target.value)} />
        <button style={{ marginLeft: '2%' }} type='submit'>submit test</button>
      </form> 
    </div>
  )
}

export default TestForm;