const fetch = require('node-fetch');

const REACT_APP_GOOGLE_SHEETS_API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY; 
const REACT_APP_GOOGLE_SHEETS_DOC_ID = process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID;
const REACT_APP_GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;


exports.handler = async (event, context) => {
  try{
    /** 
     * This lambda (aws) function has access to Netlify build env variables. 
     * That's how process.env.DARKSKY_API_KEY can work. There's no need to
     * use dotenv or write a .env file to disk.
     */
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${REACT_APP_GOOGLE_SHEETS_DOC_ID}/values/Our whiskies!A2:E11?key=${REACT_APP_GOOGLE_SHEETS_API_KEY}`);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};