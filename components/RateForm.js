import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function RateForm(props) {
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
    })  
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    execute();  
  };

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      
    })
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

  let nameSelect = selectData.names.map(el =>
    <MenuItem key={el.Members} value={el.Members}>{el.Members}</MenuItem>
  )

  let monthSelect = selectData.months.map(el =>
    <MenuItem key={el} value={el}>{el}</MenuItem>
  )

  let yearSelect = selectData.years.map(el =>
    <MenuItem key={el} value={el}>{el}</MenuItem>
  )

  console.log(formData)
  
  return (
    <form className='rate-form-container'>
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
      <div>
        <FormControl id='rate-form-field'>
          <InputLabel>Rating for Whiskey #1</InputLabel>
          <Input />
        </FormControl>
      </div>
      <div>
      <FormControl id='rate-form-field'>
        <InputLabel>Rating for Whiskey #2</InputLabel>
        <Input />
      </FormControl>
      </div>
      <div>
      <FormControl id='rate-form-field'>
        <InputLabel>Rating for Whiskey #3</InputLabel>
        <Input />
      </FormControl>
      </div>
    </form>
  )
};

export default withGoogleSheets('Members')(RateForm);


