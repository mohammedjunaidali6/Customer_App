import React from 'react';
import store from '../../../src/store/store';
import default_user_src from "../../assets/img/gameDetails/default_user.png";
import { getCustomerDetails } from '../common/getStoreData';

export default function UserRewardsUserInfo(props) {
    const playerData = props.PlayerRewardsData;
    var summary = store.getState().RewardZoneReducer.playerSummary;
    var customer=getCustomerDetails();

    const ExpiredRewardsCount = () => {
        return playerData?.filter(p => p.Status === 2)?.length || 0;
    }

    return (
        <div id="userrewards-user-info-container">
            <div className="userrewards-user-info">
                <div className="text-center urd-user-info-logo">
                    <img src={default_user_src} alt="" />
                </div>
                <div className="urd-user-info-name text-center">{customer?.FirstName+' '+customer?.LastName}</div>
                {/* <div className="urd-user-info-edit text-center">
                    <FaPencilAlt className="urd-user-info-edit-pencil" />
                    <div className="disp-inline ml-1 pt-1">Edit</div>
                </div> */}
            </div>
            <div className="userrewards-user-rewards-detail">
                <div className="w-33 float-left urd-left text-center">
                    <div className="urd-user-rewards-detail-count">{playerData?.length||0}</div>
                    <div className="urd-user-rewards-detail-desc">Total Wins</div>
                </div>
                <div className="w-33 float-left urd-middle text-center">
                    <div className="urd-user-rewards-detail-count">{summary?.FormattedTotalSavings || ''}</div>
                    <div className="urd-user-rewards-detail-desc">Money Saved</div>
                </div>
                <div className="w-33 float-left urd-right text-center">
                    <div className="urd-user-rewards-detail-count" style={{color:'#FF1A1A'}}>{ExpiredRewardsCount()}</div>
                    <div className="urd-user-rewards-detail-desc">Expired Rewards</div>
                </div>
            </div>
        </div>
    )
}
