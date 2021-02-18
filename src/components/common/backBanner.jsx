import React from 'react';
import back_banner_src from '../../assets/img/Coupon_bg.svg'
import group_src from '../../assets/img/transactionHistory/Group.svg'

export default function BackBanner(props) {

    return (
        <div id="back-banner-container" className={`${props.fromTransaction ? `w-90 back-banner-container-bg` : `w-90`}`}>
            {props.fromRanking ? (
                <img src={back_banner_src} title="Back Banner" className="back-banner-your-ranking" />
            ) : null}
            {props.fromTransaction ? (
                <div className="w-100 t-h-b-topbox text-center">
                    <img src={group_src} className="mt-2" />
                    <div className="w-100 t-h-b-topbox-content text-center">
                        <div className="lbl-banner-points"><span>2120</span></div>
                        <div className="lbl-banner-pointsdesc"><span>Total Points Earned</span></div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
