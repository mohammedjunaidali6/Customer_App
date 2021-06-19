import React, { Fragment, useEffect } from 'react';
import Back from "../common/back";
import master_src from '../../assets/img/rewardZone/master.svg';
import benefits_src from '../../assets/img/rewardZone/Benefits_home.svg';
import invitation_src from '../../assets/img/rewardZone/invitation.svg';
import invitation_bg_src from '../../assets/img/rewardZone/invite_bg.png';
import basketball_src from '../../assets/img/rewardZone/game1.png';
import bingo_src from '../../assets/img/rewardZone/game2.png';
import { tempArray } from '../../gameData'
import './rewardZone.css';
import { containerHeightCalcFn } from "../common/global";
import RewardBox from "../common/rewardBox";
import ProgressBar from "../common/progressBar";
import { setEngagements } from "../../actions/rewardZone/rewardZoneActionHandler"
import { getData, postData } from '../../api/apiHelper';
import { ACTIVE_ENGAGEMENTS } from '../../api/apiConstants';

// const tempArray = [
//     {
//         id: 1, 
//         winners: 14, 
//         amountWon: 1247, 
//         logo: basketball_src, 
//         offerText: '3 Lucky Winners to Get 50% of an iPhone',
//         progress: 47
//     },
//     {
//         id: 2, 
//         winners: 147, 
//         amountWon: 35789, 
//         logo: bingo_src, 
//         offerText: 'Enjoy Free Shipping for Next 3 Months',
//         progress: 21
//     },
//     {
//         id: 3, 
//         winners: 87, 
//         amountWon: 5897, 
//         logo: null, 
//         offerText: 'Exclusive 18 % on All Shoes for Purchases',
//         progress: 67
//     },
//     {
//         id: 4, 
//         winners: 173, 
//         amountWon: 87542, 
//         logo: null, 
//         offerText: 'Jackpot reward of INR 1000 on Next 10 Purchases',
//         progress: 87
//     }
// ];

export default function RewardZone(props) {
    console.log('***', props)

    function rewardOpenFn() {
        props.history.push('/userrewards');
    }
    function rankingOpenFn() {
        props.history.push('/ranking');
    }
    function pointsOpenFn() {
        props.history.push('/transactionhistory');
    }
    function gameDetailFn(data) {
        props.rewardZoneActionHandler.pushSelectedEngagement(data);
        props.history.push({ pathname: "/gamedetail" });
    }
    function leaderBoardFn() {
        props.history.push('/leaderboard');
    }
    function statusFn() {
        props.history.push('/status');
    }

    // props.rewardZoneActionHandler.getRewards(tempArray);

    useEffect(() => {
        getData(`${ACTIVE_ENGAGEMENTS}?customer_id=1`).then(engagementswithGames => {
            console.log('**', engagementswithGames);
            props.rewardZoneActionHandler.setEngagements(engagementswithGames);
        })
    }, []);

    return (
        <Fragment>
            <Back height="226"
                fromRewardZone={true}
                parentProps={props}
                rewardOpenFn={rewardOpenFn}
                rankingOpenFn={rankingOpenFn}
                pointsOpenFn={pointsOpenFn} />
            <div id="reward-zone-container" className="" style={{ height: containerHeightCalcFn(190), overflowY: 'auto', paddingBottom: '27px' }}>
                <div id="reward-zone-status-container">
                    <div className="reward-zone-status-logo">
                        <img src={master_src} />
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
                            <img className="reward-zone-status-benefit-icon" src={benefits_src} />
                            <div className="reward-zone-status-benefit-msg">Benifit of status update</div>
                        </div>
                    </div>
                </div>
                <div className="reward-zone-invite-container">
                    <div className="reward-zone-invite-logo">
                        <img src={invitation_src} />
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
                <div className="reward-zone-handpicked-header text-bold">Handpick Challenges for you to get Lucky!!</div>
                {props.engagements && props.engagements.length > 0 ? (
                    <div className="reward-zone-handpicked-items">
                        <Fragment>
                            {props.engagements.map((obj) => (
                                <RewardBox dataObj={obj} key={obj.EngagementID} gameDetailFn={gameDetailFn} leaderBoardFn={leaderBoardFn} />
                            ))}
                        </Fragment>
                    </div>
                ) : null}
            </div>
        </Fragment>
    )
}
