import React, { Fragment } from 'react';

import ProgressBar from "../common/progressBar";

import group1_src from '../../assets/img/gameDetails/Group1.svg';
import group2_src from '../../assets/img/gameDetails/Group2.svg';
import group3_src from '../../assets/img/gameDetails/Group3.svg';

const tempArray = [
    {
        id: 1, 
        lblPrize: '1st Prize', 
        lblDiscount: '50% Flat off iPhone',
        prize: '50%',
        discount: 'FLAT DISCOUNT'
    },
    {
        id: 2, 
        lblPrize: '2nd Prize', 
        lblDiscount: '1000 Points',
        prize: '1000',
        discount: 'POINTS'
    },
    {
        id: 3, 
        lblPrize: '3rd Prize', 
        lblDiscount: 'Rs. 300 off',
        prize: '$300',
        discount: 'FLAT DISCOUNT'
    },
    {
        id: 4, 
        lblPrize: '4th Prize', 
        lblDiscount: 'Rs. 100 off',
        prize: '$100',
        discount: 'FLAT DISCOUNT'
    }
];

export default function GameDetailScratchNow(props) {
    
    return (
        <Fragment>
            {tempArray && tempArray.length > 0 ? (
                <div className="gamedetail-scratchnow-items">
                    <Fragment>
                        <div className="w-100 float-left clearfix scratchnow-big-header">It’s Chance to Get an iPhone 12 </div>
                        <div className="w-100 float-left clearfix scratchnow-small-header">Scrach more to win </div>
                        <div className="w-100 float-left clearfix scratchnow-item-container">
                            <div className="scratchnow-box">
                                <div className="scratch-box-logo">
                                    <img src={group1_src} />
                                </div>
                                <div className="scratchnow-box-header">
                                    <div className="txt-clamp-1">Invite a friend</div>
                                </div>
                                <div className="scratchnow-box-desc">
                                    <div className="txt-clamp-1">Completed</div>
                                </div>
                            </div>
                            <div className="scratchnow-box">
                                <div className="scratch-box-logo">
                                    <img src={group2_src} />
                                </div>
                                <div className="scratchnow-box-header">
                                    <div className="txt-clamp-1">Purchase for 100</div>
                                </div>
                                <div className="scratchnow-box-desc">
                                    <div className="txt-clamp-1">Completed</div>
                                </div>
                            </div>
                            <div className="scratchnow-box scratchnow-box-pending">
                                <div className="scratch-box-logo">
                                    <img src={group3_src} />
                                </div>
                                <div className="scratchnow-box-header">
                                    <div className="txt-clamp-1">Buy one Item</div>
                                </div>
                                <div className="scratchnow-box-desc">
                                    <div className="txt-clamp-1">Not Completed</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 float-left clearfix ">
                            <div className="scratchnow-complete-the-journey">Complete the journey to participate</div>
                            <div className="w-100">
                                <div className="w-90 mt-1 float-left">
                                    <ProgressBar percentage="90" />
                                </div>
                                <div className="w-10 float-left lbl-percentage">90%</div>
                            </div>
                        </div>
                        <div id="btn-scratch-now-container" className="mt-3">
                            <button type="button" id="btn-scratch-now">
                                <span className="button-text">SCRATCH NOW</span>
                            </button>
                        </div>
                    </Fragment>
                </div>
            ): null}
        </Fragment>
    )
}
