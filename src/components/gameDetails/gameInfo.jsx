import React, { Fragment } from 'react';
import trophy_src from '../../assets/img/gameDetails/trophy.svg';
import rupee_src from '../../assets/img/gameDetails/rupee.svg';

export default function GameDetailGameInfo(props) {

    function leaderBoardFn() {
        props.parentProps.history.push('/leaderboard');
    }

    return (
        <div className="disp-flex-root gamedetail-gameinfo-items">
            <div className="w-48 float-left gamedetail-gameinfo-left" onClick={() => leaderBoardFn()}>
                <div className="w-50 float-left">
                    <img src={trophy_src} className="float-right mt-2 mr-2" />
                </div>
                <div className="w-50 float-right">
                    <div className="gamedetail-gameinfo-count">241</div>
                    <div className="gamedetail-gameinfo-count-desc">Winners</div>
                </div>
            </div>
            <div className="common-divider float-left" style={{ height: "44px" }}></div>
            <div className="w-50 float-left gamedetail-gameinfo-right">
                <div className="w-50 float-left">
                    <img src={rupee_src} className="float-right mt-2 mr-2" />
                </div>
                <div className="w-50 float-left">
                    <div className="gamedetail-gameinfo-count">{props.redeemedAmount}</div>
                    <div className="gamedetail-gameinfo-count-desc">Amount won</div>
                </div>
            </div>
        </div>
    )
}
