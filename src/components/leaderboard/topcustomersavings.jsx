import React, { Fragment, useEffect } from 'react';
import defaultuser_src from "../../assets/img/gameDetails/default_user.png";
import coin_src from "../../assets/img/leaderboard/coin.svg";
import Back from "../common/back";
import { containerHeightCalcFn } from "../common/global";
import './leaderboard.css';
import store from '../../store/store';
import { postData } from '../../api/apiHelper';
import { ENGT_PROD_HOST_URI, SERVICE_TYPE, TOP_CUSTOMER_SAVINGS } from '../../api/apiConstants';
import OthersSavings from './otherCustomerSavings';
import { getCustomerDetails } from '../common/getStoreData';


const backTitle = 
<span>
    <span className="leaderboard-back-header mr-2">Back</span>
    {/* <span className="leaderboard-back-header-s">(Top 20 players)</span> */}
</span>;

export default function TopCustomerSavings(props) {
    // console.log('***',props);
    var customer=getCustomerDetails();
    var selectedEngagement=store.getState().RewardZoneReducer.selectedEngagement;

    useEffect(()=>{
        let data={
            EngagementID:selectedEngagement.EngagementID,
            CustomerID:customer.CustomerID,
        }
        postData(`${ENGT_PROD_HOST_URI}${TOP_CUSTOMER_SAVINGS}`,data, SERVICE_TYPE.ENGT)
            .then(data=>{
                if(data){
                    console.log('***',data)
                    props.leaderboardActionHandler.dispatchTopCustomerSavings(data);
                }
            });
    },[])
    
    return (
        <div id="leaderboard-outer-container">
            <Back parentProps={props} fromLeaderBoard={true} backTitle={backTitle} />
            <div id="leaderboard-container" style={{height: containerHeightCalcFn()}}>
                <div className="urs-leaderboard">
                    <div className="w-100 float-left clearfix urs-leaderboard-content">
                        <div className="w-15 float-left clearfix text-center">
                            <img src={defaultuser_src} className="urs-leaderboard-logo p-1" />
                        </div>
                        <div className="w-85 float-left clearfix pt- urs-leaderboard-lbl-pos">
                            <span style={{paddingLeft:'25px'}}>You have won </span>
                            <img src={coin_src} />
                            <span> {props.topCustomersSavings?.FormattedCustomerTotalSavings}</span>
                        </div>
                        {/* <div className="w-25 float-left clearfix pt-3">
                            <img src={coin_src} style={{marginBottom: "3px"}} />
                            <span className="urs-leaderboard-lbl-coins pl-1">2,345 K</span>
                        </div> */}
                    </div>
                </div>
                <OthersSavings parentProps={props} />
                <div className="w-100 disp-flex-root leaderboard-winners-list mt-4 mb-4">
                    {props.topCustomersSavings && props.topCustomersSavings.CustomerSavingsResponse&&
                    props.topCustomersSavings.CustomerSavingsResponse.length>0 ?
                        props.topCustomersSavings.CustomerSavingsResponse.map((obj,ndx) =>
                            <div key={ndx} className="w-100 float-left clearfix leaderboard-winners-list-box">
                                <div className="w-15 float-left clearfix text-center" style={{position: "relative"}}>
                                    <img src={defaultuser_src} className="leaderboard-winners-list-logo p-1" />
                                </div>
                                <div className="w-40 float-left clearfix pt-3 pl-2 leaderboard-winners-list-lbl">
                                    <span>{obj.PlayerName}</span>
                                </div>
                                <div className="w-30 float-left clearfix pt-3">
                                    <img src={coin_src} style={{marginBottom: "3px"}} />
                                    <span className="leaderboard-winners-list-lbl-coins pl-1">{obj.FormattedAmountSaved}</span>
                                </div>
                                <div className="w-15 float-left clearfix pt-3">
                                    <span className="leaderboard-winners-list-lbl-coins pl-1">{obj.FormattedRedeemedDate}</span>
                                </div>
                            </div>
                        )
                        :
                        <div style={{fontFamily:'Roboto',color:'#808A8F',textAlign:'center'}}>
                            No Winners for this Engagement
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
