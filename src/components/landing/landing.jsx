import React, { useState, useEffect } from 'react';
import { containerHeightCalcFn } from '../common/global';
import './landing.css';
import logo_src from "../../assets/img/landing/logo.png";
import welcome_src from "../../assets/img/landing/welcome.png";
import welcome_gift_src from "../../assets/img/landing/giftBox.gif";
import blaash_logo_src from "../../assets/img/landing/blaash-logo.png";
import music_progress from "../../assets/img/landing/music_progress.gif";
import welcome1_src from "../../assets/img/landing/Welcome1.gif";
import welcome2_src from "../../assets/img/landing/Welcome2.gif";

export default function Landing(props) {
    useEffect(() => {
        document.body.style.overflow = "unset";
    }, []);
    function loginClickFn() {
        document.body.style.overflow = "hidden";
        props.history.push('auth');
    }

    setTimeout(()=>{
        props.history.push('/rewardzone');
    },5000);


    
    return (
        <div id="landing-container" className="">
            <div className="welcome-top-sec">
                <img src={welcome_gift_src} style={{ height: '75%', paddingTop: "64px" }} />
            </div>
            <div>
                {/* <img src={blaash_logo_src} style={{ height: '84px', width: '180px' }} /> */}
            </div>
            {/* <div className="welcome-to-coupon-wo">
                Welcome to Coupon World
            </div> */}
            {/* <div className="explore-great-coupon">
                Explore Great Coupons, Deals and Offers Let’s try How Lucky are You Today
            </div> */}
            <div>
                {/* <img src={welcome1_src} style={{ width: '75%' }} /> */}
                {/* <img src={welcome2_src} style={{ width: '90%' }} /> */}
                <img src={music_progress} style={{ height: 'auto',width:'27%', alignContent:'center' }} />
                <div style={{paddingTop:'20px',fontStyle:'Roboto',fontSize:'16px',fontWeight:'bold',color:'#808080'}}>
                    Hold On!! <br/>We are handpicking Entertainment for you..
                </div>
            </div>
            {/* <button type="button" className="surface" onClick={() => loginClickFn()}>
                <span className="button-text">EXPLORE</span>
            </button>
            <div className="exit">
                Exit
            </div> */}
            <div style={{ width: "181px", margin: "0 auto", marginTop: "40px" }}>
                <div className="powered-by">
                    Powered by
                </div>
                <div>
                    <img src={blaash_logo_src} style={{ height: '50px', width: '125px' }} alt="Logo" />
                </div>
            </div>
        </div>
    )
}
