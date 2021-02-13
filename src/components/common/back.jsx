import React from 'react';

import point_box_src from '../../assets/img/rewardZone/gem_home.svg';
import trophy_src from '../../assets/img/rewardZone/trophy_home.svg';
import rank_src from '../../assets/img/rewardZone/Rank__home.svg';
import rupee_src from '../../assets/img/rewardZone/rupee_home.svg';

export default function Back(props) {

    return (
        <div id="back-container" className="" style={{height: `${props.height}px`}}>
            <div className="back-container-content" >
                <i className="arrow left ml-2"></i>
                <span className="back-header">Back to Reward Zone</span>
                <div class="notification-box">
                    <span class="notification-count">6</span>
                    <div class="notification-bell">
                        <span class="bell-top"></span>
                        <span class="bell-middle"></span>
                        <span class="bell-bottom"></span>
                        <span class="bell-rad"></span>
                    </div>
                </div>
                {props.fromReward ? (
                    <div id="reward-zone-detail-box-container">
                        <div id="point-box" className="detail-box-content mb-3">
                            <img className="float-left" src={point_box_src} />
                            <div className="float-left">
                                <div style={{marginBottom: "2px", fontSize: "12px", color: "#3F4045"}}>2102</div>
                                <div style={{
                                    height: "20px",
                                    color: "#3F4045",
                                    fontSize: "11px",
                                    letterSpacing: "-0.03px",
                                    lineHeight: "19.6px"
                                }}>Winners</div>
                            </div>
                        </div>
                        <div id="amount-saved-box" className="detail-box-content mb-3 float-right">
                            <img className="float-left" src={rupee_src} />
                            <div className="float-left">
                                <div style={{marginBottom: "2px", fontSize: "12px", color: "#3F4045"}}>$3234</div>
                                <div style={{
                                    height: "20px",
                                    color: "#3F4045",
                                    fontSize: "11px",
                                    letterSpacing: "-0.03px",
                                    lineHeight: "19.6px"
                                }}>Amount Saved</div>
                            </div>
                        </div>
                        <div id="rewards-box" className="detail-box-content">
                            <img className="float-left" src={trophy_src} />
                            <div className="float-left">
                                <div style={{marginBottom: "2px", fontSize: "12px", color: "#3F4045"}}>3</div>
                                <div style={{
                                    height: "20px",
                                    color: "#3F4045",
                                    fontSize: "11px",
                                    letterSpacing: "-0.03px",
                                    lineHeight: "19.6px"
                                }}>Rewards</div>
                            </div>
                        </div>
                        <div id="rank-box" className="detail-box-content float-right">
                            <img className="float-left" src={rank_src} />
                            <div className="float-left">
                                <div style={{marginBottom: "2px", fontSize: "12px", color: "#3F4045"}}>12</div>
                                <div style={{
                                    height: "20px",
                                    color: "#3F4045",
                                    fontSize: "11px",
                                    letterSpacing: "-0.03px",
                                    lineHeight: "19.6px"
                                }}>Rank</div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
