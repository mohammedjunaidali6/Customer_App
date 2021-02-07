import React from 'react';

import mask_src from '../../assets/img/Mask.svg';

export default function RankingBox(props) {
    
    return (
        <div className="ranking-whole-box">
            <div className="ranking-mask-box">
                <img src={mask_src} alt="Mask" />
                <div className="curve-div ranking-item-box-bottom ranking-item-box-left"></div>
                <div className="curve-div ranking-item-box-bottom ranking-item-box-right"></div>
            </div>
            <div className="ranking-item-box">
                <div className="curve-div ranking-item-box-top ranking-item-box-left"></div>
                <div className="curve-div ranking-item-box-top ranking-item-box-right"></div>
                <div className="w-100 ranking-item-box-content mt-2 pb-0">
                    <img src="" />
                    <span className="text-rank-actual">{props.dataObj.inVal}/</span>
                    <span className="text-rank-of">{props.dataObj.ofVal}</span>
                </div>
                <div className="w-100 text-offer ranking-item-box-content pt-1">
                    <span>{props.dataObj.offerText}</span>
                </div>
                <div className="w-100 dashed-line-div"></div>
                <div className="w-100 ranking-item-box-content pt-3 pb-3">
                    <div className="w-50 float-left clearfix text-winners">
                        <span>{props.dataObj.winnersCount} Winners</span>
                    </div>
                    <div className="w-50 float-left text-right clearfix text-expire">
                        <span>{props.dataObj.expireMessage}</span>
                    </div>
                </div>
                <div className="w-100">
                    <button type="button" className="btn-ranking-item-playnow">
                        <span className="button-text">PLAY NOW</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
