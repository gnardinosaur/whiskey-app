import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

function RateInput(props) {
  return (
    <div>
      <FormControl className={props.css}>
        <InputLabel>Rating for Whiskey #{props.num}</InputLabel>
        <Input 
          error={props.error ? true : false} 
          name={`${props.num - 1}`} 
          value={props.value} 
          placeholder='0 to 100' 
          onChange={props.handleInput}
        />
      </FormControl>
    </div>
  )
};

export default RateInput;