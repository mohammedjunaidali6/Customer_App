import React, { useEffect, useState } from 'react';
import mask_src from '../../assets/img/Mask.svg';
import rupee_src from '../../assets/img/rewardZone/amountwon_home_small.svg';
import trophy_src from '../../assets/img/rewardZone/trophy_home.svg';
import tourn_src from '../../assets/img/tournament.png';
import coin_src from '../../assets/img/coin-btn.png';
import '../../assets/css/rewardBox.css';
import free from '../../assets/img/free.png'
import ProgressBar from "../common/progressBar";
import { getData, postData } from '../../api/apiHelper';
import { getCustomerDetails } from './getStoreData';
// import store from "../../store/store";
import {  
    SERVICE_TYPE,
    EVNT_PROD_HOST_URI, 
    ENGT_PROD_HOST_URI,
    ENGAGEMENT_SUMMARY, 
    PURCHASE_RULE_AMOUNT, 
} from '../../api/apiConstants';


export default function RewardBox(props) {
    const engagement=props.engagement;
    const game=engagement.Game;
    const [perc,setPerc]=useState(0);
    const [summary,setSummary]=useState();
    const [amountToBePurchased,setAmountToBePerchased]=useState(engagement?.PurchaseValue||0);
    const customerData=getCustomerDetails();

    const onPlayNow =()=>{
        props.gameDetailFn(engagement)
    }


    useEffect(()=>{
        if(!!engagement.PurchaseRuleID && !props.props.purchaseRuleValue){
            let obj={
                CustomerID:customerData?.CustomerID,
                LastNumberOfDays:engagement?.LastNumberOfDays,
                PurchaseRuleValue:engagement?.PurchaseValue
            }
            postData(`${EVNT_PROD_HOST_URI}${PURCHASE_RULE_AMOUNT}`,obj,SERVICE_TYPE.EVNT)
            .then(res=>{
                if(res){
                    setAmountToBePerchased(Math.round(res.FormattedToBePurchasedToRuleAmount));
                    props.props.rewardZoneActionHandler?.setAmountToBePurchased(res);
                    let percentage=engagement.PurchaseValue>res.PurchasedAmount?(res.PurchasedAmount/engagement?.PurchaseValue)*100:100;
                    setPerc(percentage);
                }
            })
        } else{
            setAmountToBePerchased(Math.round(props.props.purchaseRuleValue?.FormattedToBePurchasedToRuleAmount));
            let percentage=engagement.PurchaseValue>props.props.purchaseRuleValue?.PurchasedAmount?(props.props.purchaseRuleValue.PurchasedAmount/engagement?.PurchaseValue)*100:100;
            setPerc(percentage);
        }
        if(!props.props.engagementSummary){
            getData(`${ENGT_PROD_HOST_URI}${ENGAGEMENT_SUMMARY}${engagement?.EngagementID}`,SERVICE_TYPE.ENGT)
            .then(res=>{
                    setSummary(res);
                    props.props.rewardZoneActionHandler?.setEngagementSummary(res)
                })
        } else{
            setSummary(props.props.engagementSummary)
        }
    },[])

    
    return (
        <div className="reward-whole-box">
            <span className='eng-h-tourn'>{engagement?.IsTournament?<img src={tourn_src} alt={tourn_src} className="free-img"/>:''}</span>
            <div className='engagement-header-label'>
                {engagement.CostToPlay?
                    <span className='eng-h-cost'>bCoins : {engagement.CostToPlay}&nbsp;
                        <img src={coin_src} alt={tourn_src} width={8} height={8}/>
                    </span>
                    :
                    <span  className='eng-h-cost'>
                        <img src={free} alt="Free*" className="free-img"/>
                    </span>
                }
            </div>
            <div className="reward-mask-box">
                <img src={`${game?.BannerImageUrl}` || mask_src} alt="Mask" style={{ height: '88px' }} />
                <div className="curve-div reward-item-box-bottom reward-item-box-left"></div>
                <div className="curve-div reward-item-box-bottom reward-item-box-right"></div>
            </div>
            <div className="reward-item-box">
                <div className="curve-div reward-item-box-top reward-item-box-left"></div>
                <div className="curve-div reward-item-box-top reward-item-box-right"></div>
                <div className="w-100 reward-item-box-content mt-2">
                    <span className="text-rank-of">{engagement.DisplayName?.length>40?engagement.DisplayName?.substring(0,40)+'...':engagement.DisplayName}</span>
                </div>
                <div className="w-86 ml-2 mr-2">
                    {engagement?.PurchaseRuleID ? <ProgressBar height={'7px'} percentage={perc} style={{width:'80%'}}/>: ''}
                </div>
                <div className="reward-item-box-progress-msg">
                    {amountToBePurchased>0&&
                        <span>Shop for {amountToBePurchased} to Play</span>
                    }
                </div>
                <div className="w-100 text-center">
                    <button
                        type="button" 
                        className='btn-reward-item-playnow enable-btn'
                        onClick={onPlayNow}
                    ><span className="button-text">EXPLORE</span>
                    </button>
                </div>
                <div className="w-100 dashed-line-div"></div>
                <div className="w-100 reward-item-box-content pt-2 pb-3">
                    <div className="w-50 float-left clearfix text-winners" onClick={() => props.leaderBoardFn(engagement)}>
                        <div className="">
                            <img  alt="" style={{ width: "12px", float: "left", marginRight: "8px",height:'10px' }} src={trophy_src} />
                        </div>
                        <div>
                            <div style={{ marginBottom: "2px", fontSize: "12px", color: "#3F4045" }}>
                                {summary?.CustomersCount||0}
                            </div>
                            <div style={{color: "#808A8F", fontSize: "10px"}}>Players</div>
                        </div>
                    </div>
                    <div className="w-50 float-left clearfix text-winners"  onClick={() => props.customerSavings(engagement)}>
                        <div className="">
                            <img alt="" style={{ width: "12px", float: "left", marginRight: "8px" }} src={rupee_src} />
                        </div>
                        <div>
                            <div style={{ marginBottom: "2px", fontSize: "12px", color: "#3F4045" }}>
                                {summary?.FormattedAmountRedeemed||0}
                            </div>
                            <div style={{color: "#808A8F",fontSize: "10px"}}>Amount Won</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
