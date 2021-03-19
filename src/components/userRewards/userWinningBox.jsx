import React, { Fragment } from 'react';
import cx from 'classnames';

import copy_src from "../../assets/img/userRewards/copy.svg";

export default function UserWinningBox(props) {
    
    return (
        <Fragment>
            {props.winningBoxData && props.winningBoxData.length > 0 ? (
                <Fragment>
                    {props.winningBoxData.map((obj) => (
                        <div className="winniner-whole-box mb-4" key={obj.id}>
                            <div className="winniner-top-box">
                                <div className="w-75 float-left" style={{padding: "13px 0 0 16px"}}>
                                    <div className="wtb-offer">{obj.offer}</div>
                                    <div className="wtb-offer-desc">{obj.offerDesc}</div>
                                </div>
                                <div className="w-25 float-left" style={{padding: "13px 0 0 0"}}>
                                    <button type="button" className="wtb-btn"><span className="wtb-btn-text">Shop Now</span></button>
                                </div>
                                <div className="curve-div reward-item-box-bottom reward-item-box-left"></div>
                                <div className="curve-div reward-item-box-bottom reward-item-box-right"></div>
                            </div>
                            <div className={cx('winner-bottom-box', {
                                'gold-box': obj.type === 'unclaimed',
                                'blue-box': obj.type === 'expiringsoon',
                                'pink-box': obj.type === 'missed'
                                })}>
                                <div className="curve-div reward-item-box-top reward-item-box-left"></div>
                                <div className="curve-div reward-item-box-top reward-item-box-right"></div>
                                <div className="w-100" style={{padding: "0px 0px 0px 16px"}}>
                                    <span className="wbb-lbl">Your voucher code</span>
                                </div>
                                <div className="w-100 wbb-middle-box">
                                    <div className="wbb-middle-code text-center">
                                        {obj.offerCode}
                                        <img src={copy_src} className="wbb-middle-code-copy" />
                                    </div>
                                </div>
                                <div className="w-100">
                                    <div className="w-50 float-left wbb-view-more" style={{padding: "4px 0 0 16px"}}>View More Details</div>
                                    <div className="w-50 float-left wbb-expiring-lbl text-right" style={{padding: "4px 16px 0 0"}}>{obj.expiringMsg}</div>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </Fragment>
            ): null}
        </Fragment>

    )
}
