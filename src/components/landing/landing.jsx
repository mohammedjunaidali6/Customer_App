import React, { useState, useEffect } from 'react';
import './landing.css';
import welcome_gift_src from "../../assets/img/landing/giftBox.gif";
import blaash_logo_src from "../../assets/img/landing/blaash-logo.png";
import music_progress from "../../assets/img/landing/music_progress.gif";
import { getData, postData } from '../../api/apiHelper';
import { ENGT_PROD_HOST_URI, EVNT_PROD_HOST_URI, SERVICE_TYPE,ACTIVE_ENGAGEMENTS, DUMMY_TENANT_KEY } from '../../api/apiConstants';
import { axiosInstance } from '../../actions/axios-config';

export default function Landing(props) {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const [loggedInUser,setLoggedInUser]=useState(true);
    
    
    useEffect(() => {
        document.body.style.overflow = "unset";
        axiosInstance.defaults.headers.common['x-tenant-key'] = DUMMY_TENANT_KEY;
        let obj={
            Token:token
        }
        postData(`${EVNT_PROD_HOST_URI}/evnt/validate`,obj, SERVICE_TYPE.EVNT)
        .then(data=>{
            if(data){
                console.log('** Customer Logged In: ',data);
                props.landingActionHandler.dispatchCustomerData(data);
                setLoggedInUser(data);
                
                //Fetch Engagements
                getData(`${ENGT_PROD_HOST_URI}${ACTIVE_ENGAGEMENTS}`, SERVICE_TYPE.ENGT)
                    .then(engagementswithGames => {
                            props.rewardZoneActionHandler.setEngagements(engagementswithGames);
                        
                            props.history.push('rewardzone');
                    })
            } else {
                setLoggedInUser(null);
            }
        })
    }, []);

    function loginClickFn() {
        document.body.style.overflow = "hidden";
        window.open("","_self");
    }
    
    return (
        <div id="landing-container" className="">
            <div className="welcome-top-sec">
                <img src={welcome_gift_src} style={{ height: '75%', paddingTop: "64px" }} />
            </div>
            {loggedInUser?
                <>
                    <img src={music_progress} className='music-spinner' />
                    <div className="landing-text">
                        <p>Please Hold on! </p>
                        <p>Handpicking entertainment for you..</p>
                    </div>
                </>
                :
                <>
                    <div className="landing-text">
                        Please Login to See Handpicked Entertainment for you
                    </div>
                    <button type="button" className="surface" onClick={loginClickFn}>
                        <span className="button-text">LOGIN</span>
                    </button>
                </>
            }

            <div style={{ width: "181px", margin: "0 auto", marginTop: "40px" }}>
                <div className="powered-by">Powered by</div>
                <div>
                    <img src={blaash_logo_src} style={{ height: '50px', width: '125px' }} alt="Logo" />
                </div>
            </div>
        </div>
    )
}
