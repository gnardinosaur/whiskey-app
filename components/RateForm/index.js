import React, { useState, useEffect } from 'react';
import styles from './styles.scss';
import RateInput from '../RateInput/index';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { validateForm, checkForInputErrors } from '../../helpers/formValidation';
import { callLambda } from '../../helpers/lambda';
import { MONTHS } from '../../constants.js';

function RateForm(props) {

  // on render, build this number of whiskey rating inputs
  const [formInputs, setFormInputs] = useState([0, 1, 2]);

  // track and dispaly input errors
  const [formErrors, setErrors] = useState({
    name: false,
    month: false,
    year: false,
    ratings: [false, false, false]
  });

  const [selectOptions, setSelectOptions] = useState({
    names: [],
    months: MONTHS,
    years: [new Date().getFullYear()]
  });

  // control form selects and inputs 
  const [formData, setFormData] = useState({
    name: '',
    month: '',
    year: '',
    ratings: ['', '', '']
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/values/Members!A:A?key=${process.env.REACT_APP_GOOGLE_SHEETS_API_KEY}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => fetchMembers(data.values.length))
  }, []);

  function fetchMembers(val) {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/values/Members!A2:A${val}?key=${process.env.REACT_APP_GOOGLE_SHEETS_API_KEY}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      setSelectOptions({
        ...selectOptions,
        names: data.values
      });
    });
  };

  async function validateFormInputs(e) {
    e.preventDefault();
    let inputErrors = validateForm(formData, {...formErrors});
    setErrors(inputErrors);
    const userInputHasErrors = checkForInputErrors(inputErrors)
    if(!userInputHasErrors) submitForm();
  }

  async function submitForm() {
    setIsLoading(true);
    let resp = await callLambda(formData);
    setIsLoading(false);
    if(resp.statusCode === 200) {
      props.setSheetsResponse({
        show: 'success',
        successData: resp.message
      }) 
    } else {
      props.setSheetsResponse({
        show: 'fail',
        errorMessage: resp.message
      }) 
    };
  }

  function handleChange(e){
    // if input has error, remove error for that input
    if(formErrors[e.target.name]) setErrors({ 
      ...formErrors,
      [e.target.name]: false
    });

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // set whiskey rating inputs -- must map through to keep correct oder in formData.ratings arr
  function handleInput(e){
    let targetIndex = parseInt(e.target.name);
    // if error, remove error for that input
    if(formErrors.ratings[targetIndex]) setErrors({
      ...formErrors,
      ratings: formErrors.ratings.map((el, index) => index === targetIndex ? false : el)
    });

    let userRatings = [...formData.ratings].map((el, index) => index === targetIndex ? e.target.value : el)
    setFormData({
      ...formData,
      ratings: userRatings
    });
  }

  function addInput(){
    setFormInputs([
      ...formInputs, 
      formInputs.length // when rate another whiskey btn is clicked add another index num to formInput arr
    ]); 
    setFormData({
      ...formData,
      ratings: [...formData.ratings, ''] // when rate another whiskey btn is clicked add another blank element to formData.ratings arr for control
    });
    setErrors({
      ...formErrors,
      ratings: [...formErrors.ratings, false] // when rate another whiskey btn is clicked add another blank element to errors.ratings arr for error tracking
    })
  }

  // build members select
  let nameSelect = selectOptions.names.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>);

  // build month select
  let monthSelect = selectOptions.months.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>);
  
  // build year select
  let yearSelect = selectOptions.years.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>);

  // render correct number of whiskey rating inputs
  let ratingInputs = 
    formInputs.map(el =>
      <RateInput
        key={el}
        num={el + 1}
        value={formData.ratings[el]}
        handleInput={handleInput}
        error={formErrors.ratings[el]}
        css={styles.rateFormField}>
      </RateInput>
    );
  
  return (
    isLoading ?
      <CircularProgress className={styles.spinner} size={50} color='inherit'/>
    :
      <form className={styles.rateFormContainer} onSubmit={validateFormInputs}>
        <div className={styles.select}>
          <FormControl className={styles.rateFormField}>
            <InputLabel>Name</InputLabel>
            <Select error={formErrors.name} name='name' value={formData.name} onChange={handleChange}>
              {nameSelect}
            </Select>
          </FormControl>
        </div>
        <div className={styles.select}>
          <FormControl className={styles.rateFormField}>
            <InputLabel>Month</InputLabel>
            <Select error={formErrors.month} name='month' value={formData.month} onChange={handleChange}>
              {monthSelect}
            </Select>
          </FormControl>
        </div>
        <div className={styles.select}>
          <FormControl className={styles.rateFormField}>
            <InputLabel>Year</InputLabel>
            <Select error={formErrors.year} name='year' value={formData.year} onChange={handleChange}>
              {yearSelect}
            </Select>
          </FormControl>
        </div>
        <div className={styles.select}>
          {ratingInputs}
        </div>
        <div>
          <Button className={styles.rateAnotherButton} onClick={addInput}>
            Rate Another Whiskey
          </Button>
        </div>
        <div>
          <Button className={styles.submitButton} type='submit'>
            Submit
          </Button>
        </div>
      </form>
  )
}

export default RateForm;
