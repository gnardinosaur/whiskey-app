
// validate form fields 
export function validate(name, month, year, ratings, errorState) {
  if(name === '') {
    errorState['name'] = true
  }

  if (month === ''){
    errorState['month'] = true;
  }

  if (year === ''){
    errorState['year'] = true;
  }

  for(let i = 0; i < ratings.length; i++) {
    if(parseInt(ratings[i]) > 100 || parseInt(ratings[i]) < 0 || isNaN(ratings[i])) {
      errorState.ratings[i] = true;
    }
  }

  return errorState 
};