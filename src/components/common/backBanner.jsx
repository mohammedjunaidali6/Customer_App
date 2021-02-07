import React from 'react';
import back_banner_src from '../../assets/img/Coupon_bg.svg'

export default function BackBanner(props) {

    return (
        <div id="back-banner-container" className="">
            <img src={back_banner_src} title="Back Banner" className="back-banner-your-ranking" />
        </div>
    )
}
