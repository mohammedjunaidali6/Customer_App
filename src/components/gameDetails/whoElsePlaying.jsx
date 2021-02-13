import React, { Fragment } from 'react';

import default_user_src from '../../assets/img/gameDetails/default_user.png';
// import benefits_src from '../../assets/img/rewardZone/Benefits_home.svg';
// import invitation_src from '../../assets/img/rewardZone/invitation.svg';
// import invitation_bg_src from '../../assets/img/rewardZone/invite_bg.png';
// import basketball_src from '../../assets/img/rewardZone/game1.png';
// import bingo_src from '../../assets/img/rewardZone/game2.png';
// import RewardBox from "../common/rewardBox";
// import ProgressBar from "../common/progressBar";

const tempArray = [
    {
        id: 1, 
        userName: 'Richard Wills', 
        content: 'Leeadinng  on Mega Coupon contest',
        userLogo: '',
        date: '03/01/2021',
        time: '02:47 PM'
    },
    {
        id: 2, 
        userName: 'Jhon Doe', 
        content: 'Lucky Winners to Get 50% of an iPhone',
        userLogo: '',
        date: '02/01/2021',
        time: '07:15 AM'
    }
];

export default function GameDetailWhoElseplaying(props) {
    
    return (
        <Fragment>
            {tempArray && tempArray.length > 0 ? (
                <div className="gamedetail-whoelseplaying-items">
                    <Fragment>
                        <div className="who-else-is-playing">Who Else is Playing</div>
                        {tempArray.map((obj) => (
                            <div key={obj.id} className="w-100 whoelseplaying-item" >
                                <div className="w-20 whoelseplaying-logo">
                                    <img src={obj.userLogo ? obj.userLogo : default_user_src} />
                                </div>
                                <div className="w-60 whoelseplaying-user-detail">
                                    <div className="whoelseplaying-user-name">{obj.userName}</div>
                                    <div className="whoelseplaying-user-desc">{obj.content}</div>
                                </div>
                                <div className="w-20 whoelseplaying-user-date-sec">
                                    <div className="whoelseplaying-user-datetime">{obj.date}</div>
                                    <div className="whoelseplaying-user-datetime">{obj.time}</div>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                </div>
            ): null}
        </Fragment>
    )
}
