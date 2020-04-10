  // secrets from .env
  const SPREADSHEET_ID = process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID;
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
  const SCOPE = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets';
  const range = 'test';

  // initialize Google API
  export function initClient() {
    gapi.load('client:auth2', authenticate)
  };

  // provide 0Auth credentials
  function authenticate() {
    gapi.client.init({
      'client_id': CLIENT_ID,
      'apiKey': API_KEY,
      'scope': SCOPE,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
    })
    .then(googleSignIn)
  };

  // sign-in using 0Auth with scopes so we can read/write sheet with GoogleSheets API -- log success or errors to console for debugging
  function googleSignIn() {
    return gapi.auth2.getAuthInstance()
      .signIn({scope: SCOPE})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); })
  }

  export function execute() {
    console.log('execute')
    // return gapi.client.sheets.spreadsheets.values.append({
    //   "spreadsheetId": SPREADSHEET_ID,
    //   "key": API_KEY,
    //   "range": range,
    //   "valueInputOption": "RAW",
    //   "resource": {
    //     "values": [
    //       [input]
    //     ]
    //   }
    // })
    // .then(function(response) {
    //   // Handle the results here (response.result has the parsed body).
    //   console.log("Response", response);
    //   },
    //   function(err) { console.error("Execute error", err); });
  };