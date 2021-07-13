import React, { Fragment, useEffect, useState } from 'react';
import text1_src from '../../assets/img/loading/ProgressBarText1.gif';
import text2_src from '../../assets/img/loading/ProgressBarText2.gif';
export default function Auth(props) {
  console.log('***', props)
  const [perc, setPerc] = useState(1);


  setTimeout(() => {
    props.history.push('/rewardzone');

  }, 3000);
  useEffect(() => {
    const timer = setInterval(() => {
      setPerc(perc + 33)
    }, 1000);

  }, [])

  return (
    <div style={{ marginTop: '50%' }} className='box'>
      <div className='pb-3 pl-2'>
        <img src={text1_src} style={{ width: '90%' }} />
      </div>
      <div className='pb-5 pl-2'>
        <img src={text2_src} style={{ width: '90%' }} />
      </div>
      <div className="progress-bar animate" style={{ height: '20px', width: '60%' }}>
        <span style={{ width: `${100}%` }}>
          <span></span>
        </span>
      </div>
    </div>
  )

}