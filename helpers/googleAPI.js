  const SCOPE = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets';

  // initialize Google API
  // 'cb' is 'submitForm' function from RateForm component and passed down until it's called by 'googleSignIn' function below
  export function initClient(cb) {
    gapi.load('client:auth2', () => authenticate(cb))
  };

  // provide 0Auth credentials
  function authenticate(cb) {
    gapi.client.init({
      'client_id': process.env.REACT_APP_GOOGLE_CLIENT_ID,
      'apiKey': process.env.REACT_APP_GOOGLE_SHEETS_API_KEY,
      'scope': SCOPE,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
    })
    .then(() => googleSignIn(cb))
  };

  // sign-in using 0Auth with scopes so we can read/write sheet with GoogleSheets API -- log success or errors to console for debugging
  function googleSignIn(cb) {
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: SCOPE })
      .then(function() { console.log('sign-in successful'); }, function(err) { console.error('error signing in:', err); })
      .then(() => cb())
  };

  export function cleanFormData(data, dataArr = []) {
    let values = Object.values(data);
    values.map(el => {
      if(el instanceof Array) {
        cleanFormData(el, dataArr)
      } else {
        dataArr.push(el)
      }
    })
    return dataArr
  };
  
  export function postFormData(data) {
    // add simplified timestamp at beginning of 'data' array
    let date = new Date().toString();
    let i = date.indexOf('G');
    let timestamp = date.substring(0, i - 1);
    data.unshift(timestamp);

    return gapi.client.sheets.spreadsheets.values.append({
      'spreadsheetId': process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID,
      'key': process.env.REACT_APP_GOOGLE_SHEETS_API_KEY,
      'range': 'test',
      'valueInputOption': 'RAW',
      'resource': {
        'values': [data]
      }
    })
    .then(function(response) { return response }, 
      function(err) { return err }
    );
  }