import React, { Fragment, useEffect, useState } from 'react';
import Back from "../common/back";
import rupee_src from '../../assets/img/rewardZone/amountwon_home_small.svg';
import trophy_src from '../../assets/img/rewardZone/trophy_home.svg';
import ProgressBar from "../common/progressBar";
import './rewardZone.css';
import {WhatsappIcon,WhatsappShareButton} from 'react-share'
import dots_progress from '../../assets/img/dots-progress.gif';
import { containerHeightCalcFn } from "../common/global";
import RewardBox from "../common/rewardBox";
import GCarousel from '../common/carousel';
import { getCustomerDetails } from '../common/getStoreData';
import { getData, postData } from '../../api/apiHelper';
import {
    ENGT_PROD_HOST_URI,
    SERVICE_TYPE,
    ACTIVE_ENGAGEMENTS,
} from '../../api/apiConstants';


export default function RewardZone(props) {
    // console.log('**', props);
    const [engagementsLoading,setEngagementsLoading]=useState(false);
    var customer=getCustomerDetails();
    
    var referralLink=`${customer?.SignUpUrl}?refcode=${customer?.ReferralCode}`;
    var referralMessage="Shopping is more exciting now, Play Games and Win Exciting Rewards, Come Join the fun at -"+referralLink;

    function pointsOpenFn() {
        props.history.push('/transactionhistory');
    }
    function customerSavingsOpenFn() {
        props.history.push('/customersavings');
    }
    function rewardOpenFn() {
        props.history.push('/userrewards');
    }
    function tournamentsOpenFn(){
        props.history.push('/tournaments');
    }

    function gameDetailFn(selectedEngagementData) {
        props.rewardZoneActionHandler.pushSelectedEngagement(selectedEngagementData);
        props.history.push({ pathname: "/gamedetail" });
    }
    function leaderBoardFn(selectedEngagementData) {
        props.rewardZoneActionHandler.pushSelectedEngagement(selectedEngagementData);
        props.history.push('/leaderboard');
    }
    function topCustomerSavingsOpenFn(selectedEngagementData){
        props.rewardZoneActionHandler.pushSelectedEngagement(selectedEngagementData);
        props.history.push('/topcustomersavings');
    }
    
    function statusFn() {
        props.history.push('/status');
    }
    const carouselItemClick = (data) => {
        props.rewardZoneActionHandler.pushSelectedEngagement(props.engagements[data]);
        props.history.push({ pathname: "/gamedetail" });
    }

    useEffect(() => {
        if(!Array.isArray(props.engagements)){
            setEngagementsLoading(true);
            getData(`${ENGT_PROD_HOST_URI}${ACTIVE_ENGAGEMENTS}`, SERVICE_TYPE.ENGT)
                .then(engagementswithGames => {
                    props.rewardZoneActionHandler.setEngagements(engagementswithGames);
                    setEngagementsLoading(false);
                })
        }
        props.rewardZoneActionHandler.setEngagementsRuleAmounts([]);
    }, []);

    return (
        <Fragment>
            <Back height="226"
                customerID={customer.CustomerID}
                fromRewardZone={true}
                parentProps={props}
                rewardOpenFn={rewardOpenFn}
                pointsOpenFn={pointsOpenFn}
                tournamentsOpenFn={tournamentsOpenFn}
                customerSavingsOpenFn={customerSavingsOpenFn}
            />
            <div id="reward-zone-container" className="" style={{ height: containerHeightCalcFn(190), overflowY: 'auto', paddingBottom: '27px' }}>
                {/* <div id="reward-zone-status-container">
                    <div className="reward-zone-status-logo">
                        <img src={master_src} alt='' />
                    </div>
                    <div className="reward-zone-status-divider"></div>
                    <div className="reward-zone-status-content" onClick={() => statusFn()}>
                        <div>
                            <h5 className="mb-1">Master</h5>
                        </div>
                        <ProgressBar percentage="48" />
                        <div>
                            <span className="reward-zone-status-msg">Perform 2 more task to reach Status B</span>
                        </div>
                        <div>
                            <img className="reward-zone-status-benefit-icon" src={benefits_src} alt='' />
                            <div className="reward-zone-status-benefit-msg">Benifit of status update</div>
                        </div>
                    </div>
                </div> */}
                <div className="reward-zone-invite-container">
                    <div className="reward-zone-invite-logo">
                        <WhatsappShareButton url={referralMessage}>
                            <WhatsappIcon size={48} round={true} />
                        </WhatsappShareButton>
                    </div>
                    <div className="reward-zone-invite-content">
                        <div>
                            <h5 className="mb-0">Invite your Friends and Earn</h5>
                        </div>
                        <div>
                            <span className="reward-zone-status-msg">Invite your Friends and Earn</span>
                        </div>
                    </div>
                </div>
                {engagementsLoading?
                    <img src={dots_progress} height='5%' width='40%' style={{margin:'20% 30%'}}/>
                    :
                    <Fragment>
                        <GCarousel data={props.engagements}
                            fromGameDetail={false}
                            centerMode={true}
                            centerSlidePercentage={80}
                            carouselItemClick={carouselItemClick} >
                        </GCarousel>
                        <div className="reward-zone-handpicked-header text-bold">Handpick Challenges for you to get Lucky!!</div>
                        <div className="reward-zone-handpicked-items">
                            {props.engagements && props.engagements.length > 0 &&props.engagements.map((obj,i) => 
                                i%5!=0?
                                <RewardBox 
                                    engagement={obj} 
                                    props={props}
                                    gameDetailFn={gameDetailFn} 
                                    customerSavings={topCustomerSavingsOpenFn} 
                                    leaderBoardFn={leaderBoardFn} 
                                />
                                :
                                <div className="reward-rect-box">
                                    <div className="reward-mask-box">
                                        <img src={`${obj.Game?.RectangleImageUrl}`} alt="Mask" style={{ height: '100%' }} />
                                        <div className="curve-div reward-item-box-bottom reward-item-box-left"></div>
                                        <div className="curve-div reward-item-box-bottom reward-item-box-right"></div>
                                    </div>
                                    <div className="reward-item-box">
                                        <div className="curve-div reward-item-box-top reward-item-box-left"></div>
                                            <div className="curve-div reward-item-box-top reward-item-box-right"></div>
                                            <div className="w-100 reward-item-box-content mt-2">
                                                <span className="text-rank-of">{obj.DisplayName?.length>40?obj.DisplayName?.substring(0,40)+'...':obj.DisplayName}</span>
                                            </div>
                                            <div className="w-86 ml-2 mr-2">
                                                <ProgressBar height={'7px'} percentage={90} style={{width:'90%'}}/>
                                            </div>
                                            <div className="reward-item-box-progress-msg">
                                                    <span>Shop for {1000} to Play</span>
                                            </div>
                                            <div className="w-100 text-center">
                                                <button
                                                    type="button" 
                                                    className='btn-reward-item-playnow enable-btn'
                                                    onClick={()=>{}}
                                                ><span className="button-text">EXPLORE</span>
                                                </button>
                                            </div>
                                            <div className="w-100 dashed-line-div"></div>
                                            <div className="w-100 reward-item-box-content pt-2 pb-3">
                                                <div className="w-50 float-left clearfix text-winners" style={{marginLeft:'4%'}} onClick={() => {}}>
                                                    <div className="">
                                                        <img style={{ width: "12px", float: "left", marginRight: "8px",height:'10px' }} src={trophy_src} />
                                                    </div>
                                                    <div>
                                                        <div style={{ marginBottom: "2px", fontSize: "12px", color: "#3F4045" }}>
                                                            {0}
                                                        </div>
                                                        <div style={{color: "#808A8F", fontSize: "10px"}}>Players</div>
                                                    </div>
                                                </div>
                                                <div className="w-50 float-left clearfix text-winners" style={{marginLeft:'76%',marginTop:'-3%'}}   onClick={() => {}}>
                                                    <div className="">
                                                        <img style={{ width: "12px", float: "left", marginRight: "8px" }} src={rupee_src} />
                                                    </div>
                                                    <div>
                                                        <div style={{ marginBottom: "2px", fontSize: "12px", color: "#3F4045" }}>
                                                            {0}
                                                        </div>
                                                        <div style={{color: "#808A8F",fontSize: "10px"}}>Amount Won</div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}
