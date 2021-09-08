import React, { Fragment, useState } from 'react';
import trophy_src from "../../assets/img/userRewards/trophy.svg";
import expiring_src from "../../assets/img/userRewards/Expiringsoon.svg";
import missed_src from "../../assets/img/userRewards/missed.svg";
import unclaimed_src from "../../assets/img/userRewards/Unclaimed.svg";
import UserWinningBox from "./userWinningBox";


export default function UserWinnings(props) {
    const [selectedType, setSelectedType] = useState();
    const [winningArray, setWinningArray] = useState(props.PlayerRewardsData);

    function setSelectedTypeFn(val) {
        setSelectedType(val);
        if (val == 0 || val == 1 || val == 2) {
            var arr = [...props.PlayerRewardsData];
            setWinningArray(arr.filter(e => e.Status === val));
        } else {
            setWinningArray(props.PlayerRewardsData);
        }
    }

    return (
        <Fragment>
            <div className="your-winnings">Your Winnings</div>
            <div id="userrewards-user-winnings-container" className="w-100 disp-flex-root">
                <div className={`w-25 float-left m-0-auto pt-1 pb-1 b-r-10 ${!selectedType ? `bg-white-box` : ``}`} >
                    <div className="your-winnings-box" onClick={() => setSelectedTypeFn()} style={{ background: "linear-gradient(36.11deg, #4753DA 0%, #C79CFF 100%)" }} >
                        <img src={trophy_src} />
                        <div className="your-winnings-box-title">All Rewards</div>
                    </div>
                </div>
                <div className={`w-25 float-left m-0-auto pt-1 pb-1 b-r-10 ${selectedType === 0 ? `bg-white-box` : ``}`} >
                    <div className="your-winnings-box" onClick={() => setSelectedTypeFn(0)} style={{ background: "linear-gradient(36.11deg, #c6742e 0%, #eac16e 100%)" }}>
                        <img src={unclaimed_src} />
                        <div className="your-winnings-box-title">Unclaimed</div>
                    </div>
                </div>
                <div className={`w-25 float-left m-0-auto pt-1 pb-1 b-r-10 ${selectedType === 1 ? `bg-white-box` : ``}`} >
                    <div className="your-winnings-box" onClick={() => setSelectedTypeFn(1)} style={{ background: "linear-gradient(36.11deg, #5f94de 0%, #78acee 100%)" }}>
                        <img src={expiring_src} />
                        <div className="your-winnings-box-title" style={{ marginTop: '6px' }}>Expiring soon</div>
                    </div>
                </div>
                <div className={`w-25 float-left m-0-auto pt-1 pb-1 b-r-10 ${selectedType === 2 ? `bg-white-box` : ``}`} >
                    <div className="your-winnings-box" onClick={() => setSelectedTypeFn(2)} style={{ background: "linear-gradient(36.11deg, #df598a 0%, #ee8ba8 100%)" }}>
                        <img src={missed_src} />
                        <div className="your-winnings-box-title" style={{ marginTop: '10px' }}>Missed</div>
                    </div>
                </div>
            </div>
            <UserWinningBox parentProps={props.parentProps} winningBoxData={winningArray || props.PlayerRewardsData} />
        </Fragment>
    )
}
