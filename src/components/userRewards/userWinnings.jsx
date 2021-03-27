import React, { Fragment, useState } from 'react';

import trophy_src from "../../assets/img/userRewards/trophy.svg";
import expiring_src from "../../assets/img/userRewards/Expiringsoon.svg";
import missed_src from "../../assets/img/userRewards/missed.svg";
import unclaimed_src from "../../assets/img/userRewards/Unclaimed.svg";
import UserWinningBox from "./userWinningBox";

const tempArray = [
    {
        id: 1,
        type: 'unclaimed',
        offer: '₹100 Off',
        offerDesc: 'Rs.100 Off on any shoe purchase',
        offerCode: 'HAPPYNEWYEAR100',
        expiringMsg: 'Expiring in 3 days'
    },
    {
        id: 2,
        type: 'expiringsoon',
        offer: '₹100 Off',
        offerDesc: 'Rs.100 Off on any shoe purchase',
        offerCode: 'HAPPYNEWYEAR100',
        expiringMsg: 'Expiring in 3 days'
    },
    {
        id: 3,
        type: 'expiringsoon',
        offer: '₹100 Off',
        offerDesc: 'Rs.100 Off on any shoe purchase',
        offerCode: 'HAPPYNEWYEAR100',
        expiringMsg: 'Expiring in 3 days'
    },
    {
        id: 4,
        type: 'missed',
        offer: '₹100 Off',
        offerDesc: 'Rs.100 Off on any shoe purchase',
        offerCode: 'HAPPYNEWYEAR100',
        expiringMsg: 'Expiring in 3 days'
    },
    {
        id: 5,
        type: 'missed',
        offer: '₹100 Off',
        offerDesc: 'Rs.100 Off on any shoe purchase',
        offerCode: 'HAPPYNEWYEAR100',
        expiringMsg: 'Expiring in 3 days'
    },
    {
        id: 6,
        type: 'missed',
        offer: '₹100 Off',
        offerDesc: 'Rs.100 Off on any shoe purchase',
        offerCode: 'HAPPYNEWYEAR100',
        expiringMsg: 'Expiring in 3 days'
    }
];

export default function UserWinnings(props) {
    const [selectedType, setSelectedType] = useState('all');
    const [winningArray, setWinningArray] = useState(tempArray);

    function setSelectedTypeFn(val) {
        setSelectedType(val);
        if(val === 'all') {
            setWinningArray(tempArray);
        } else {
            setWinningArray(tempArray.filter(e => e.type === val));
        }
    }

    return (
        <Fragment>
            <div className="your-winnings">Your Winnings</div>
            <div id="userrewards-user-winnings-container" className="w-100 disp-flex-root">
                <div className={`w-25 float-left m-0-auto pt-1 pb-1 b-r-10 ${selectedType === 'all' ? `bg-white-box` : ``}`} >
                    <div className="your-winnings-box" onClick={() => setSelectedTypeFn('all')} style={{background: "linear-gradient(36.11deg, #4753DA 0%, #C79CFF 100%)"}} >
                        <img src={trophy_src} />
                        <div className="your-winnings-box-title">All Rewards</div>
                    </div>
                </div>
                <div className={`w-25 float-left m-0-auto pt-1 pb-1 b-r-10 ${selectedType === 'unclaimed' ? `bg-white-box` : ``}`} >
                    <div className="your-winnings-box" onClick={() => setSelectedTypeFn('unclaimed')} style={{background: "linear-gradient(36.11deg, #c6742e 0%, #eac16e 100%)"}}>
                        <img src={unclaimed_src} />
                        <div className="your-winnings-box-title">Unclaimed</div>
                    </div>
                </div>
                <div className={`w-25 float-left m-0-auto pt-1 pb-1 b-r-10 ${selectedType === 'expiringsoon' ? `bg-white-box` : ``}`} >
                    <div className="your-winnings-box" onClick={() => setSelectedTypeFn('expiringsoon')} style={{background: "linear-gradient(36.11deg, #5f94de 0%, #78acee 100%)"}}>
                        <img src={expiring_src} />
                        <div className="your-winnings-box-title" style={{marginTop:'6px'}}>Expiring soon</div>
                    </div>
                </div>
                <div className={`w-25 float-left m-0-auto pt-1 pb-1 b-r-10 ${selectedType === 'missed' ? `bg-white-box` : ``}`} >
                    <div className="your-winnings-box" onClick={() => setSelectedTypeFn('missed')} style={{background: "linear-gradient(36.11deg, #df598a 0%, #ee8ba8 100%)"}}>
                        <img src={missed_src} />
                        <div className="your-winnings-box-title" style={{marginTop:'10px'}}>Missed</div>
                    </div>
                </div>
            </div>
            <UserWinningBox parentProps={props.parentProps} winningBoxData={winningArray} />
        </Fragment>
    )
}
