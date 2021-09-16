import React, { useEffect, useState } from 'react';
import mask_src from '../../assets/img/Mask.svg';
import rupee_src from '../../assets/img/rewardZone/amountwon_home_small.svg';
import '../../assets/css/rewardBox.css';
import ProgressBar from "../common/progressBar";
import { postData } from '../../api/apiHelper';
import { EVNT_PROD_HOST_URI, PURCHASED_AMOUNT, SERVICE_TYPE } from '../../api/apiConstants';
import { getCustomerDetails } from './getStoreData';


export default function RewardBox(props) {
    // console.log('***',props);
    const customerData=getCustomerDetails();
    const engagement=props.engagement;
    const game=engagement.Game;
    const [perc,setPerc]=useState(0);
    const [amountToBePurchased,setAmountToBePerchased]=useState(engagement?.PurchaseValue||0);


    const onPlayNow =()=>{
        props.gameDetailFn(engagement)
    }
    const onShopMore=()=>{
        alert('SHOP MORE is yet to be implemented');
    }

    useEffect(()=>{
        let obj={
            CustomerID:customerData?.CustomerID,
            LastNumberOfDays:engagement?.LastNumberOfDays
        }
        postData(`${EVNT_PROD_HOST_URI}${PURCHASED_AMOUNT}`,obj,SERVICE_TYPE.EVNT)
        .then(res=>{
            setAmountToBePerchased(Math.round(engagement?.PurchaseValue-res));
            let percentage=engagement.PurchaseValue?(res/engagement?.PurchaseValue)*100:100;
            percentage =percentage>100?100:percentage;
            setPerc(percentage);
            let arr=[...props.props.engagementRuleAmounts||[]];
            arr.push({EngagementID:engagement.EngagementID,Percentage:percentage})
            props.props.rewardZoneActionHandler.setEngagementsRuleAmounts(arr);
        })
    },[])

    return (
        <div className="reward-whole-box">
            <div className="reward-mask-box">
                <img src={`${game?.BannerImageUrl}` || mask_src} alt="Mask" style={{ height: '88px' }} />
                <div className="curve-div reward-item-box-bottom reward-item-box-left"></div>
                <div className="curve-div reward-item-box-bottom reward-item-box-right"></div>
            </div>
            <div className="reward-item-box">
                <div className="curve-div reward-item-box-top reward-item-box-left"></div>
                <div className="curve-div reward-item-box-top reward-item-box-right"></div>
                <div className="w-100 reward-item-box-content mt-2">
                    <span className="text-rank-of">{engagement.DisplayName}</span>
                </div>
                <div className="w-86 ml-2 mr-2">
                    <ProgressBar height={'7px'} percentage={perc} style={{width:'90%'}}/>
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
                    ><span className="button-text">{amountToBePurchased<=0?'PLAY NOW':'EXPLORE'}</span>
                    </button>
                </div>
                <div className="w-100 dashed-line-div"></div>
                <div className="w-100 reward-item-box-content pt-3 pb-3">
                    {/* <div className="w-50 float-left clearfix text-winners">
                        <div className="">
                            <img style={{ width: "19px", float: "left", marginRight: "6px" }} src={trophy_src} />
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => props.leaderBoardFn(engagement)}>
                            <div style={{ marginBottom: "2px", fontSize: "12px", color: "#3F4045" }}>{engagement.winners || 12}</div>
                            <div style={{
                                height: "7px",
                                color: "#808A8F",
                                fontSize: "8px",
                                letterSpacing: "-0.02px",
                                lineHeight: "7px"
                            }}>Winners</div>
                        </div>
                    </div> */}
                    <div className="w-100 float-left clearfix text-expire"  onClick={() => props.customerSavings(engagement)}>
                        <img style={{ width: "25px", float: "left", marginRight: "6px" }} src={rupee_src} />
                        <div style={{ marginBottom: "2px", fontSize: "12px", color: "#3F4045" }}>
                            {props.amountRedeemed}
                        </div>
                        <div style={{color: "#808A8F",fontSize: "8px"}}>Amount Won</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
