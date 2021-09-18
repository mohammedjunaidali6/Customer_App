import React, { Fragment } from 'react';

export default function Exception(props) {

  return(
    <Fragment>
      <div>SOMETHING WENT WRONG</div>
      <button
          type="button" 
          onClick={props.history.push('rewardzone')}
      >Home</button>
    </Fragment>
  )
}