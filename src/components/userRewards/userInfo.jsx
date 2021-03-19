import React from 'react';
import { FaPencilAlt } from "react-icons/fa";

import default_user_src from "../../assets/img/gameDetails/default_user.png";

export default function UserRewardsUserInfo(props) {
    
    return (
        <div id="userrewards-user-info-container">
            <div className="userrewards-user-info">
                <div className="text-center urd-user-info-logo">
                    <img src={default_user_src} />
                </div>
                <div className="urd-user-info-name text-center">Richard Branson</div>
                <div className="urd-user-info-edit text-center">
                    <FaPencilAlt className="urd-user-info-edit-pencil" />
                    <div className="disp-inline ml-1 pt-1">Edit</div>
                </div>
            </div>
            <div className="userrewards-user-rewards-detail">
                <div className="w-33 float-left urd-left text-center">
                    <div className="urd-user-rewards-detail-count">241</div>
                    <div className="urd-user-rewards-detail-desc">Total Wins</div>
                </div>
                <div className="w-33 float-left urd-middle text-center">
                    <div className="urd-user-rewards-detail-count">$3234</div>
                    <div className="urd-user-rewards-detail-desc">Money Saved</div>
                </div>
                <div className="w-33 float-left urd-right text-center">
                    <div className="urd-user-rewards-detail-count">$3234</div>
                    <div className="urd-user-rewards-detail-desc">Passed Away</div>
                </div>
            </div>
        </div>
    )
}
