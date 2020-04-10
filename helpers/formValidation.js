
// validate form fields 
export function validate(name, month, year, ratings, errorState) {
  if(name === '') {
    errorState['name'] = true
    errorState.hasErrors = true;
  }

  if (month === ''){
    errorState['month'] = true;
    errorState.hasErrors = true;

  }

  if (year === ''){
    errorState['year'] = true;
    errorState.hasErrors = true;
  }

  for(let i = 0; i < ratings.length; i++) {
    if(parseInt(ratings[i]) > 100 || parseInt(ratings[i]) < 0 || isNaN(ratings[i])) {
      errorState.ratings[i] = true;
      errorState.hasErrors = true;
    }
  }

  return errorState 
};