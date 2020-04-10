import React from 'react';
import BannerWrap from './BannerWrap';
import RateForm from './RateForm';

function Rate() {
  console.log(db)
  return (
    <div className='rate'>
      <BannerWrap />
      <p>Whiskey ratings</p>
      <p id='rate-small-text'>Access full ratings <a href='https://docs.google.com/spreadsheets/d/1RSuvv3vVcr7xFm29P-2sbTGKCqs_mqRqDHeGzM9l-jA/edit#gid=1971787420' target='_blank'>here</a></p>
      <RateForm />
    </div>
  )
}

export default Rate;