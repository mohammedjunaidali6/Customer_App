import React, { Fragment, useEffect } from 'react';
import Back from "../common/back";
import master_src from '../../assets/img/rewardZone/master.svg';
import benefits_src from '../../assets/img/rewardZone/Benefits_home.svg';
import invitation_src from '../../assets/img/rewardZone/invitation.svg';
import './rewardZone.css';
import ProgressBar from '../common/progressBar';
import { containerHeightCalcFn } from "../common/global";
import RewardBox from "../common/rewardBox";
import GCarousel from '../common/carousel';
import { getData } from '../../api/apiHelper';
import {
    ENGT_PROD_HOST_URI,
    REPT_PROD_HOST_URI,
    SERVICE_TYPE,
    ACTIVE_ENGAGEMENTS,
    PLAYER_SUMMARY,
} from '../../api/apiConstants';


export default function RewardZone(props) {
    // console.log('**', props);
    function rewardOpenFn() {
        props.history.push('/userrewards');
    }
    function rankingOpenFn() {
        props.history.push('/ranking');
    }
    function pointsOpenFn() {
        props.history.push('/transactionhistory');
    }
    function customerSavingsOpen() {
        props.history.push('/customersavings');
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
    const carouselItemClick = (data) => {
        props.rewardZoneActionHandler.pushSelectedEngagement(props.engagements[data]);
        props.history.push({ pathname: "/gamedetail" });
    }


    useEffect(() => {
        getData(`${REPT_PROD_HOST_URI}${PLAYER_SUMMARY}`, SERVICE_TYPE.REPT)
            .then(summary => {
                props.rewardZoneActionHandler?.setPlayerSummary(summary);
            })
        getData(`${ENGT_PROD_HOST_URI}${ACTIVE_ENGAGEMENTS}`, SERVICE_TYPE.ENGT)
            .then(engagementswithGames => {
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
                pointsOpenFn={pointsOpenFn}
                customerSavingsOpenFn={customerSavingsOpen}
            />
            <div id="reward-zone-container" className="" style={{ height: containerHeightCalcFn(190), overflowY: 'auto', paddingBottom: '27px' }}>
                <div id="reward-zone-status-container">
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
                </div>
                <div className="reward-zone-invite-container">
                    <div className="reward-zone-invite-logo">
                        <img src={invitation_src} alt='' />
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
                <GCarousel data={props.engagements}
                    fromGameDetail={false}
                    centerMode={true}
                    centerSlidePercentage={80}
                    carouselItemClick={carouselItemClick} >
                </GCarousel>
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
