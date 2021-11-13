import React, { Fragment, useState } from 'react';
import trophy_src from '../../assets/img/gameDetails/trophy.svg';
import rupee_src from '../../assets/img/gameDetails/rupee.svg';

export default function GameDetailGameInfo(props) {

    const engagementSummary=props?.engagementSummary;
    // console.log(props)

    function leaderBoardFn() {
        props.parentProps.history.push('/leaderboard');
    }
    function customerSavingsOpenFn() {
        props.parentProps.history.push('/topcustomersavings');
    }
    
    return (
        <div className="disp-flex-root gamedetail-gameinfo-items">
            <div className="w-48 float-left gamedetail-gameinfo-left" onClick={() => leaderBoardFn()}>
                {props.isTourn? <><div className="w-50 float-left">
                    <img src={trophy_src} alt={trophy_src} className="float-right mt-2 mr-2" />
                </div>
                <div className="w-50 float-right">
                    <div className="gamedetail-gameinfo-count">{engagementSummary?.CustomersCount}</div>
                    <div className="gamedetail-gameinfo-count-desc">Players</div>
                </div></>: <div className="w-100 float-left"></div>}
            </div>
            <div className="common-divider float-left" style={{ height: "44px" }}></div>
            <div className="w-50 float-left gamedetail-gameinfo-right" onClick={()=>customerSavingsOpenFn()}>
                <div className="w-50 float-left">
                    <img src={rupee_src} alt={rupee_src} className="float-right mt-2 mr-2" />
                </div>
                <div className="w-50 float-left">
                    <div className="gamedetail-gameinfo-count">{engagementSummary?.FormattedAmountRedeemed}</div>
                    <div className="gamedetail-gameinfo-count-desc">Amount Won</div>
                </div>
            </div>
        </div>
    )
}
