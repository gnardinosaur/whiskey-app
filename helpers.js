export function validate(name, month, year, ratings) {
  let errors = {};
  if(name === '') {
    errors['name'] = 'name'
  }

  if (month === ''){
    errors['month'] = 'month'
  }

  if (year === ''){
    errors['year'] = 'year'
  }

  for(let i = 0; i < ratings.length; i++) {
    if(parseInt(ratings[i]) > 100 || parseInt(ratings[i]) < 0 || isNaN(ratings[i])) {
      if(errors['ratings']) {
        errors['ratings'].push(i)
      } else {
        errors['ratings'] = [i]
      }
    }
  }

  return errors 
};