import React, { Fragment, useEffect } from 'react';
import ProgressBar from "../common/progressBar";


export default function Auth(props) {
  console.log('***', props)

  setTimeout(() => {
    props.history.push('/rewardzone');

  }, 3000);

  return (
    <div style={{ marginTop: '80%', height: '50px' }} >
      <ProgressBar height='20' />
    </div>
  )

}