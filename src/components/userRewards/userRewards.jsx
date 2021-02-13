import React, { Fragment } from 'react';
import Back from "../common/back";

import trophy_src from '../../assets/img/userRewards/trophy.svg';
import unclaimed_src from '../../assets/img/userRewards/Unclaimed.svg';
import expiringsoon_src from '../../assets/img/userRewards/Expiringsoon.svg';
import missed_src from '../../assets/img/userRewards/missed.svg';
import './userRewards.css';
import UserRewardsUserInfo from "./userInfo";
import UserDailyReward from "./userDailyReward";
import UserWinnings from "./userWinnings";

const tempArray = [
    {
        id: 1,
        logo: trophy_src,
        text: 'All Rewards',
        active: true
    },
    {
        id: 2, 
        logo: unclaimed_src,
        text: 'Unclaimed',
        active: false
    },
    {
        id: 3, 
        logo: expiringsoon_src,
        text: 'Expiring soon',
        active: false
    },
    {
        id: 4, 
        logo: missed_src,
        text: 'Missed',
        active: false
    }
];

export default function UserRewards(props) {
    console.log('UserRewards props', props);
    return (
        <div id="userrewards-container">
            <Back fromGameDetail={true} />
            <UserRewardsUserInfo parentProps={props} />
            <UserDailyReward parentProps={props} />
            <UserWinnings parentProps={props} />
        </div>
    )
}
