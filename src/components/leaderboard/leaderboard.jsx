import React, { Fragment, useEffect } from 'react';
import './leaderboard.css';
import Back from "../common/back";
import defaultuser_src from "../../assets/img/gameDetails/default_user.png";
import coin_src from "../../assets/img/leaderboard/coin.svg";
import { containerHeightCalcFn } from "../common/global";
import OthersPlaying from "./leaderboardOthersPlaying";
import LeaderBoardWinners from "./leaderboardWinners";
import store from '../../store/store';
import { getData } from '../../api/apiHelper';
import { ENGT_PROD_HOST_URI, LEADERBOARD_BY_ENGAGEMENT, SERVICE_TYPE } from '../../api/apiConstants';
import { getCustomerDetails } from '../common/getStoreData';


const backTitle = 
<span>
    <span className="leaderboard-back-header mr-2">Leaderboard</span>
    <span className="leaderboard-back-header-s">(Top 20 players)</span>
</span>;

export default function LeaderBoard(props) {
    console.log('***',props);

    var selectedEngagement=store.getState().RewardZoneReducer.selectedEngagement;
    var customer=getCustomerDetails();
    // console.log('***',selectedEngagement);

    const handleLoader=(bool)=>{
        props.routeActionHandler.dispatchLoaderData(bool)
    }

    useEffect(()=>{
        handleLoader(true);
        getData(`${ENGT_PROD_HOST_URI}${LEADERBOARD_BY_ENGAGEMENT}${selectedEngagement.EngagementID}`, SERVICE_TYPE.ENGT)
            .then(res=>{
                console.log('***',res);
                props.leaderboardActionHandler.dispatchLeaderBoard(res||[]);
                handleLoader(false);
            });
    },[])
    
    const you=props.leaderboard.length&&props.leaderboard.find(l=>l.PlayerID==customer.CustomerID);
    const yourPosition=you?(you.Rank==1?'1st':you.Rank==2?'2nd':you.Rank==3?'3rd':you.Rank+'th'):'';

    return (
        <div id="leaderboard-outer-container">
            <Back parentProps={props} fromLeaderBoard={true} backTitle={backTitle} />
            <div id="leaderboard-container" style={{height: containerHeightCalcFn()}}>
                <div className="urs-leaderboard">
                    <div className="w-100 float-left clearfix urs-leaderboard-content">
                        <div className="w-15 float-left clearfix text-center">
                            <img src={defaultuser_src} className="urs-leaderboard-logo p-1" />
                        </div>
                        <div className="w-60 float-left clearfix pt-3 urs-leaderboard-lbl-pos">
                            <span>You are at {yourPosition||'-'} position</span>
                        </div>
                        <div className="w-25 float-left clearfix pt-3">
                            <img src={coin_src} style={{marginBottom: "3px"}} />
                            <span className="urs-leaderboard-lbl-coins pl-1">{you?.Score?.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="w-100 float-left clearfix urs-leaderboard-desc-outer pt-1">
                        <span className="urs-leaderboard-desc">You are just 200 points away to win the first Prize, <span className="mvp-link">Go For It</span></span>
                    </div>
                </div>
                <OthersPlaying parentProps={props} />
                <LeaderBoardWinners parentProps={props} />
            </div>
        </div>
    )
}
