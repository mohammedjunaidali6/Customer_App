import React from 'react';
import back_banner_src from '../../assets/img/Coupon_bg.svg'
import group_src from '../../assets/img/transactionHistory/Group.svg';
import rupee_src from '../../assets/img/rewardZone/rupee_home.svg';

import store from '../../../src/store/store';


export default function BackBanner(props) {


    var summary = store.getState().RewardZoneReducer?.playerSummary;

    return (
        <div id="back-banner-container" className={`${(props.fromTransaction || props.fromCustomerSavings) ? `back-banner-container-bg` : ``}`}>
            {props.fromRanking &&
                <>
                    <img src={back_banner_src} title="Back Banner" className="back-banner-your-ranking" />
                </>
            }
            {props.fromTransaction || props.fromCustomerSavings ? (
                <div className="w-100 text-center">
                    {props.fromCustomerSavings && <img src={rupee_src} className="mt-2 currency-logo" />}
                    {props.fromTransaction && <img src={group_src} className="mt-2" />}
                    <div className="w-100 text-center">
                        <div className="lbl-banner-points">
                            <span>
                                {props.fromTransaction ? summary?.FormattedTotalPoints
                                    : props.fromCustomerSavings ? "$" + summary?.FormattedTotalSavings
                                        : 0}
                            </span>
                        </div>
                        <div className="pt-2 lbl-banner-pointsdesc">
                            <span>{props.fromCustomerSavings ? "Total Amount Saved" : "Total Points Earned"}</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
