export function validateForm(formData, formErrors) {
  
  if(formData.name === '') formErrors['name'] = true;

  if (formData.month === '') formErrors['month'] = true;

  if (formData.year === '') formErrors['year'] = true;

  for(let i = 0; i < formData.ratings.length; i++) {
    if(parseInt(formData.ratings[i]) > 100 || parseInt(formData.ratings[i]) < 0 || isNaN(formData.ratings[i])) {
      formErrors.ratings[i] = true;
    }
  }

  return formErrors;
};

export function checkForInputErrors(inputErrorsObject) {
  let errorArray = [];

  for(let key in inputErrorsObject) {
    if(inputErrorsObject[key] instanceof Array) {
      errorArray = [...errorArray, ...inputErrorsObject[key]];
    } else {
      errorArray.push(inputErrorsObject[key]);
    }
  };

  return errorArray.includes(true);
};