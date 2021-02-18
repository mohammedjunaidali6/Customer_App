import React from 'react';
import back_banner_src from '../../assets/img/Coupon_bg.svg'

export default function BackBanner(props) {

    return (
        <div id="back-banner-container" className={`${props.fromTransaction ? `w-80 back-banner-container-bg` :``}`}>
            <img src={props.bannerLogo ? props.bannerLogo : back_banner_src} title="Back Banner" className={`back-banner-your-ranking ${props.fromTransaction ? `` :``}`} />
            {props.fromTransaction ? (
                <div></div>
            ) : null}
        </div>
    )
}
