import React, { Fragment } from 'react';
import reward1_src from '../../assets/img/gameDetails/reward1.svg';
import reward2_src from '../../assets/img/gameDetails/reward2.svg';
import reward3_src from '../../assets/img/gameDetails/reward3.svg';
import reward4_src from '../../assets/img/gameDetails/reward4.svg';


export default function GameDetailRewards(props) {
    // console.log('****',props);
    
    const getWinPositionString = (position) => {
        switch (position) {
            case 1:
                return '1st Prize';
            case 2:
                return '2nd Prize';
            case 3:
                return '3rd Prize';
            case 4:
                return '4th Prize';
            default:
                return '_ Prize';
        }
    }
    const getDiscountString=(type,value)=>{
        value=value||'_';
        switch(type){
            case 'percentage':
                return value+'%';
            default:
                return value+'';
        }
    }

    return (
        <Fragment>
            {props.rewards && props.rewards.length > 0 ? (
                <div className="gamedetail-rewards-items">
                    <Fragment>
                        <div className="rewards-header">Rewards</div>
                        {props.rewards.map((obj, i) => (
                            <div className={`rewards-item rewards-item-${i + 1}`} key={`reward-item${obj.RewardMasterID}`}>
                                {/* <img className="reward-place" src={obj.WinPosition === 1 ? reward1_src : (obj.WinPosition === 2 ? reward2_src : (obj.WinPosition === 3 ? reward3_src : reward4_src))} /> */}
                                <div className="w-30 rewards-item-left" >
                                    <div className="rewards-discount">
                                        <div className="rewards-discount-header">{getDiscountString(obj.DiscountType,obj.DiscountValue)}</div>
                                        <div className="rewards-discount-desc">{obj.RewardType}</div>
                                        <div className="curve-div reward-item-box-top reward-item-box-right"></div>
                                        <div className="curve-div reward-item-box-bottom reward-item-box-right"></div>
                                    </div>
                                </div>
                                <div className="w-70 rewards-item-right" >
                                    <div className="rewards-discount-detail">
                                        {/* <div className="rewards-discount-detail-name">{getWinPositionString(obj.WinPosition)}</div> */}
                                        <div className="rewards-discount-detail-name"></div>
                                        <div className="rewards-discount-detail-desc">{obj.DisplayName}</div>
                                        <div className="rewards-discount-detail-TC">T&C apply</div>
                                        <div className="curve-div reward-item-box-top reward-item-box-left"></div>
                                        <div className="curve-div reward-item-box-bottom reward-item-box-left"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                </div>
            ) : null}
        </Fragment>
    )
}
