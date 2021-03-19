import React, { useState } from 'react';

import './landing.css';
import logo_src from "../../assets/img/landing/logo.png";
import welcome_src from "../../assets/img/landing/welcome.png";
import welcome_gift_src from "../../assets/img/landing/welcome_gift.svg";

export default function Landing(props) {
  
    function loginClickFn() {
        props.history.push('rewardzone');
    }

    return (
        <div id="landing-container" className="">
            <div className="welcome-top-sec">
                <img src={welcome_gift_src} style={{paddingTop: "64px"}} />
            </div>
            <div className="text-center">
                <img src={logo_src} />
            </div>
            <div className="welcome-to-coupon-wo">
                Welcome to Coupon World
            </div>
            <div className="explore-great-coupon">
                Explore Great Coupons, Deals and Offers Let’s try How Lucky are You Today
            </div>
            <button type="button" className="surface" onClick={() => loginClickFn()}>
                <span className="button-text">LOGIN</span>
            </button>
            <div className="exit">
                Exit
            </div>
            <div style={{height: "32px", width: "181px", margin: "0 auto", marginTop: "40px"}}>
                <div className="powered-by">
                    powered by
                </div>
                <div className="powered-by-logo">
                    powered by
                </div>
            </div>
        </div>
    )
}
