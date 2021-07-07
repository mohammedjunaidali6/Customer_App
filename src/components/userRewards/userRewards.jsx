import React, { Fragment } from 'react';
import Back from "../common/back";
import trophy_src from '../../assets/img/userRewards/trophy.svg';
import unclaimed_src from '../../assets/img/userRewards/Unclaimed.svg';
import expiringsoon_src from '../../assets/img/userRewards/Expiringsoon.svg';
import missed_src from '../../assets/img/userRewards/missed.svg';
import './userRewards.css';
import { containerHeightCalcFn } from "../common/global";
import UserRewardsUserInfo from "./userInfo";
import UserDailyReward from "./userDailyReward";
import UserWinnings from "./userWinnings";
import { useEffect } from 'react';
import { Engagement_Host_URI, PLAYER_REWARD_HISTORY } from '../../api/apiConstants';
import { getData } from '../../api/apiHelper';
import { useState } from 'react';

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
    const [PlayerRewardsData, setPlayerRewardsData] = useState();


    useEffect(() => {
        getData(`${Engagement_Host_URI}${PLAYER_REWARD_HISTORY}`)
            .then(allRewards => {
                setPlayerRewardsData(allRewards);
                props.userRewardsActionHandler.dispatchUserRewards(allRewards);
            })
    }, [])


    return (
        <Fragment>
            <Back parentProps={props} fromUserRewards={true} height="148" />
            <UserRewardsUserInfo parentProps={props} PlayerRewardsData={PlayerRewardsData} />
            <div id="userrewards-container" style={{ height: containerHeightCalcFn(268), overflowY: 'auto', paddingBottom: '27px' }}>
                <UserDailyReward parentProps={props} />
                <UserWinnings parentProps={props} PlayerRewardsData={PlayerRewardsData} />
            </div>
        </Fragment>
    )
}
