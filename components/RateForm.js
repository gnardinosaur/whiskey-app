import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import RateInput from './RateInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

function RateForm(props) {
  const [formInputs, setFormInputs] = useState([1, 2, 3]);


  const [selectData, setSelectData] = useState({
    names: [],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    years: [2020, 2021]
  });

  const [formData, setFormData] = useState({
    name: '',
    month: '',
    year: '',
    ratings: []
  });


  useEffect(() => {
    setSelectData({
      ...selectData,
      names: props.db.Members
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted')
    // execute();  
  };

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      
    })
  };

  function addInput(){
    setFormInputs(formInputs.concat(formInputs.length + 1))
  }

  function execute() {
    return gapi.client.sheets.spreadsheets.values.append({
      "spreadsheetId": SPREADSHEET_ID,
      "key": API_KEY,
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

  let nameSelect = selectData.names.map(el => <MenuItem key={el.Members} value={el.Members}>{el.Members}</MenuItem>)

  let monthSelect = selectData.months.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)
  
  let yearSelect = selectData.years.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)

  let ratingInputs = formInputs.map(el => <RateInput key={el} num={el}></RateInput>)
  
  return (
    <form className='rate-form-container' onSubmit={handleSubmit}>
      <div>
        <FormControl required id='rate-form-field'>
          <InputLabel>Name</InputLabel>
          <Select name='name' value={formData.name} onChange={handleChange}>
            {nameSelect}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl required id='rate-form-field'>
          <InputLabel>Month</InputLabel>
          <Select name='month' value={formData.month} onChange={handleChange}>
            {monthSelect}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl required id='rate-form-field'>
          <InputLabel>Year</InputLabel>
          <Select name='year' value={formData.year} onChange={handleChange}>
            {yearSelect}
          </Select>
        </FormControl>
      </div>
      {/* num of rating inputs - default, can add more onClick */}
      {ratingInputs}
      <div>
        <Button variant='contained' id='rate-another-btn' onClick={addInput}>Rate Another Whiskey</Button>
      </div>
      <div>
        <Button variant='contained' id='submit-btn'>Submit</Button>
      </div>
    </form>
  )
};

export default withGoogleSheets('Members')(RateForm);


