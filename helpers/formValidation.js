// validate form fields 
/** 
 * Ratings: there is an error if the input value is not a number, less than 0, or greater than 100.
*/
export function validate(name, month, year, ratings, errors) {
  
  if(name === '') errors['name'] = true;

  if (month === '') errors['month'] = true;

  if (year === '') errors['year'] = true;

  for(let i = 0; i < ratings.length; i++) {
    if(parseInt(ratings[i]) > 100 || parseInt(ratings[i]) < 0 || isNaN(ratings[i])) {
      errors.ratings[i] = true;
    }
  };
  
  return errors
};

export function checkForTrueValues(object, hasNoInputErrors = true) {
  for(let key in object) {
    if(object[key] instanceof Array) {
      // if any of the ratings arr values are 'true', set hasNoInputErrors in parent call to 'false' so that we can return this value to the RateForm component
      hasNoInputErrors = checkForTrueValues(object[key], hasNoInputErrors)
    } else {
      if(object[key]) hasNoInputErrors = false;
    }
  };
  
  return hasNoInputErrors 
}