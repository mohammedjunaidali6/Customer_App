import React, { Fragment } from 'react';
import rupee_src from "../../assets/img/rewardZone/rupee_home.svg";

export default function UserDailyReward(props) {
    
    return (
        <div id="userrewards-user-dailyreward-container">
            <div className="w-15 float-left text-center urd-dailyreward-logo">
                <img src={rupee_src} />
                <div className="urd-dailyreward-logo-value">1000</div>
            </div>
            <div className="common-divider" style={{height: "62px"}}></div>
            <div className="w-60 float-left urd-dailyreward-content pl-2">
                <div className="urd-dailyreward-content-header">Daily reward to be won!!</div>
                <div className="urd-dailyreward-content-desc">
                    This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations
                </div>
            </div>
            <div className="w-20 float-left text-center pt-2">
                <button type="button" className="urd-dailyreward-btn">
                    <span className="urd-dailyreward-btn-text">Play</span>
                </button>
                <div className="urd-dailyreward-date">02/01/2021</div>
            </div>
        </div>
    )
}
