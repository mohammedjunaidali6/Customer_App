import React, { Fragment, useEffect, useState } from 'react';
import { ENGT_PROD_HOST_URI,ACTIVE_ENGAGEMENTS, SERVICE_TYPE } from '../../api/apiConstants';
import { getData } from '../../api/apiHelper';


export default function Loading(props) {
  // console.log('***',props);
  const [perc, setPerc] = useState(1);

  useEffect(()=>{
    
  },[])


  return (
    <div style={{ marginTop: '50%', alignContent: 'center' }} className='box'>
      <div className='pb-3 pl-4'>
        <span style={{ fontSize: '22px', fontWeight: 'bold', fontFamily: 'Open Sans' }}>
          Hold On!! We are handpicking
        </span>
        {/* <img src={text1_src} style={{ width: '90%' }} /> */}
      </div>
      <div className='pb-5 pl-4'>
        {/* <img src={text2_src} style={{ width: '90%' }} /> */}
        <span style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Open Sans' }}>
          Entertainment for you..
        </span>
      </div>
      <div className="progress-bar animate" style={{ height: '20px', width: '60%' }}>
        <span style={{ width: `${100}%` }}>
          <span></span>
        </span>
      </div>
    </div>
  )

}