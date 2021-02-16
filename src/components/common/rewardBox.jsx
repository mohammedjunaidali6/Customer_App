import React from 'react';

import mask_src from '../../assets/img/Mask.svg';
import rupee_src from '../../assets/img/rewardZone/amountwon_home_small.svg';
import trophy_src from '../../assets/img/rewardZone/trophy_home.svg';
import '../../assets/css/rewardBox.css';
import ProgressBar from "../common/progressBar";

export default function RewardBox(props) {
    
    return (
        <div className="reward-whole-box">
            <div className="reward-mask-box">
                <img src={props.dataObj.logo ? props.dataObj.logo : mask_src} alt="Mask" />
                <div className="curve-div reward-item-box-bottom reward-item-box-left"></div>
                <div className="curve-div reward-item-box-bottom reward-item-box-right"></div>
            </div>
            <div className="reward-item-box">
                <div className="curve-div reward-item-box-top reward-item-box-left"></div>
                <div className="curve-div reward-item-box-top reward-item-box-right"></div>
                <div className="w-100 reward-item-box-content mt-2 pb-0">
                    <span className="text-rank-of">{props.dataObj.offerText}</span>
                </div>
                <div className="w-100">
                    <ProgressBar percentage={props.dataObj.progress} />
                </div>
                <div className="reward-item-box-progress-msg">
                    <span>You are very close to winning</span>
                </div>
                <div className="w-100 text-center">
                    <button type="button" className="btn-reward-item-playnow">
                        <span className="button-text">SCRATCH NOW</span>
                    </button>
                </div>
                <div className="w-100 dashed-line-div"></div>
                <div className="w-100 reward-item-box-content pt-3 pb-3">
                    <div className="w-50 float-left clearfix text-winners">
                        <div className="">
                            <img style={{width: "19px", float: "left", marginRight: "6px"}} src={trophy_src} />
                        </div>
                        <div>
                            <div style={{marginBottom: "2px", fontSize: "12px", color: "#3F4045"}}>{props.dataObj.winners}</div>
                            <div style={{
                                height: "7px",
                                color: "#808A8F",
                                fontSize: "8px",
                                letterSpacing: "-0.02px",
                                lineHeight: "7px"
                            }}>Winners</div>
                        </div>
                    </div>
                    <div className="w-50 float-left clearfix text-expire">
                        <div>
                            <img style={{width: "19px", float: "left", marginRight: "6px"}} src={rupee_src} />
                        </div>
                        <div>
                            <div style={{marginBottom: "2px", fontSize: "12px", color: "#3F4045"}}>${props.dataObj.amountWon}</div>
                            <div style={{
                                height: "7px",
                                color: "#808A8F",
                                fontSize: "8px",
                                letterSpacing: "-0.02px",
                                lineHeight: "7px"
                            }}>Amount Won</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
