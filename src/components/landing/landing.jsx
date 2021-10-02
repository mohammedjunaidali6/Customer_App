import React, { useState, useEffect, Fragment } from 'react';
import './landing.css';
import welcome_gift_src from "../../assets/img/landing/giftBox.gif";
import blaash_logo_src from "../../assets/img/landing/blaash-logo.png";
import music_progress from "../../assets/img/landing/music_progress.gif";
import { axiosInstance } from '../../actions/axios-config';
import { postData } from '../../api/apiHelper';
import { 
    EVNT_PROD_HOST_URI, 
    SERVICE_TYPE,
    DUMMY_TENANT_KEY, 
} from '../../api/apiConstants';

export default function Landing(props) {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const [loggedInUser,setLoggedInUser]=useState(true);
    
    
    useEffect(() => {
        document.body.style.overflow = "unset";
        axiosInstance.defaults.headers.common['x-tenant-key'] = DUMMY_TENANT_KEY;
        if(token){
            let obj={
                Token:token
            }
            postData(`${EVNT_PROD_HOST_URI}/evnt/validate`,obj, SERVICE_TYPE.EVNT)
            .then(data=>{
                if(data){
                    console.log('** Customer Logged In: ',data);
                    props.landingActionHandler.dispatchCustomerData(data);
                    setLoggedInUser(data);
                    props.history.push('rewardZone');
                } else {
                    setLoggedInUser(null);
                }
            })
        }else{
            setLoggedInUser(false);
        }
    }, []);

    function loginClickFn() {
        document.body.style.overflow = "hidden";
        window.open("","_self");
    }
    
    return (
        <div id="landing-container">
            <div className="welcome-top-sec">
                <img src={welcome_gift_src} style={{ height: '75%', paddingTop: "64px" }} />
            </div>
            {loggedInUser?
                <Fragment>
                    <img src={music_progress} className='music-spinner' />
                    <div className="landing-text">
                        <p>Please Hold on! </p>
                        <p>Handpicking entertainment for you..</p>
                    </div>
                </Fragment>
                :
                <Fragment>
                    <div className="landing-text">
                        <p>Please Login to see</p>
                        <p>Handpicked Entertainment for you</p>
                    </div>
                    <button type="button" className="surface" onClick={loginClickFn}>
                        <span className="button-text">LOGIN</span>
                    </button>
                </Fragment>
            }
            <div className='powered'>
                <div className="powered-by">Powered by</div>
                <div>
                    <img src={blaash_logo_src} style={{ height: '50px', width: '125px' }} alt="Logo" />
                </div>
            </div>
        </div>
    )
}
