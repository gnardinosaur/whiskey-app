import React, { useState, useEffect } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import RateInput from './RateInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { validate, checkForTrueValues } from '../helpers/formValidation';
import { initClient, cleanFormData, postFormData } from '../helpers/googleAPI';

function RateForm(props) {
  // using this state to render correct number of whiskey rating inputs
  const [formInputs, setFormInputs] = useState([0, 1, 2]);

  // using this state to track and dispaly errors + as a boolean to submit form or not
  const [errors, setErrors] = useState({
    name: false,
    month: false,
    year: false,
    ratings: [false, false, false]
  });

  // using this state to set selects 
  const [selectData, setSelectData] = useState({
    names: [],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    years: [2020, 2021]
  });

  // set selects and pull member name data from GoogleSheet
  useEffect(() => {
    setSelectData({
      ...selectData,
      names: props.db.Members
    });
  }, []);

  // using this state to control form selects and inputs 
  const [formData, setFormData] = useState({
    name: '',
    month: '',
    year: '',
    ratings: ['', '', ''],
  });

  function validateFormInputs(e) {
    e.preventDefault();
    let inputErrors = validate(formData.name, formData.month, formData.year, formData.ratings, {...errors});
    let promise = new Promise((res, rej) => {
      res(setErrors(inputErrors))
    });
    promise.then(() => {
      // if inputErrors has any true values do not initiate Google client 
      if(checkForTrueValues(inputErrors)) initClient(submitForm)      
    });
  };

  // clean formData (function in googleAPI.js helper) & post inputs to Google sheet
  function submitForm() {
    let promise = new Promise((res, rej) => {
      res(cleanFormData(formData))
    })
    promise.then(cleanData => postFormData(cleanData))
  };

  function handleChange(e){
    // if input has error, remove error for that input
    if(errors[e.target.name]) setErrors({
      ...errors,
      [e.target.name]: false
    });

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // set whiskey rating inputs -- must map through to keep correct oder in formData.ratings arr
  function handleInput(e){
    let targetIndex = parseInt(e.target.name);
    // if error, remove error for that input
    if(errors.ratings[targetIndex]) setErrors({
      ...errors,
      ratings: errors.ratings.map((el, idx) => idx === targetIndex ? false : el)
    });

    let userRatings = [...formData.ratings].map((el, index) => index === targetIndex ? e.target.value : el)
    setFormData({
      ...formData,
      ratings: userRatings
    });
  };

  function addInput(){
    setFormInputs([...formInputs, formInputs.length]); // when rate another whiskey btn is clicked add another num to formInput arr
    setFormData({
      ...formData,
      ratings: [...formData.ratings, ''] // when rate another whiskey btn is clicked add another blank element to formData.ratings arr for control
    });
    setErrors({
      ...errors,
      ratings: [...errors.ratings, ''] // when rate another whiskey btn is clicked add another blank element to errors.ratings arr for error tracking
    })
  };

  // build members select
  let nameSelect = selectData.names.map(el => <MenuItem key={el.Members} value={el.Members}>{el.Members}</MenuItem>)

  // build month select
  let monthSelect = selectData.months.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)
  
  // build year select
  let yearSelect = selectData.years.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)

  // render correct number of whiskey rating inputs
  let ratingInputs = formInputs.map(el => <RateInput key={el} num={el + 1} value={formData.ratings[el]} handleInput={handleInput} error={errors.ratings[el]}></RateInput>)
  
  return (
    <form className='rate-form-container' onSubmit={validateFormInputs}>
      <div>
        <FormControl required id='rate-form-field'>
          <InputLabel>Name</InputLabel>
          <Select error={errors.name ? true : false} name='name' value={formData.name} onChange={handleChange}>
            {nameSelect}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl required id='rate-form-field'>
          <InputLabel>Month</InputLabel>
          <Select error={errors.month ? true : false} name='month' value={formData.month} onChange={handleChange}>
            {monthSelect}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl required id='rate-form-field'>
          <InputLabel>Year</InputLabel>
          <Select error={errors.year ? true : false} name='year' value={formData.year} onChange={handleChange}>
            {yearSelect}
          </Select>
        </FormControl>
      </div>
      {ratingInputs}
      <div>
        <Button variant='contained' id='rate-another-btn' onClick={addInput}>Rate Another Whiskey</Button>
      </div>
      <div>
        <Button variant='contained' id='submit-btn' type='submit'>Submit</Button>
      </div>
    </form>
  )
};

export default withGoogleSheets('Members')(RateForm);


