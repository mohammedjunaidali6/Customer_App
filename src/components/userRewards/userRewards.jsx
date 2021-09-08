import React, { Fragment } from 'react';
import Back from "../common/back";
import _ from 'lodash';
import './userRewards.css';
import { containerHeightCalcFn } from "../common/global";
import UserRewardsUserInfo from "./userInfo";
import UserDailyReward from "./userDailyReward";
import UserWinnings from "./userWinnings";
import { useEffect } from 'react';
import { ENGT_PROD_HOST_URI, PLAYER_REWARD_HISTORY, SERVICE_TYPE } from '../../api/apiConstants';
import { postData } from '../../api/apiHelper';
import { useState } from 'react';
import { getCustomerDetails } from '../common/getStoreData';


export default function UserRewards(props) {
    const [PlayerRewardsData, setPlayerRewardsData] = useState();

    var customer=getCustomerDetails();

    const handleLoader=(bool)=>{
        props.routeActionHandler.dispatchLoaderData(bool);
    }

    useEffect(() => {
        handleLoader(true);
        let data={
            CustomerID:customer.CustomerID
        }
        postData(`${ENGT_PROD_HOST_URI}${PLAYER_REWARD_HISTORY}`,data, SERVICE_TYPE.ENGT)
            .then(allRewards => {
                let ordered=_.sortBy(allRewards,r=>r.ExpiredDate).reverse();
                setPlayerRewardsData(ordered);
                props.userRewardsActionHandler.dispatchUserRewards(ordered);
                handleLoader(false);
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
