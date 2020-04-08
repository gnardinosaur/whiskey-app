import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


function RateInput(props) {
  return (
    <div>
      <FormControl id='rate-form-field'>
        <InputLabel>Rating for Whiskey #{props.num}</InputLabel>
        <Input />
      </FormControl>
    </div>
  )
};

export default RateInput;