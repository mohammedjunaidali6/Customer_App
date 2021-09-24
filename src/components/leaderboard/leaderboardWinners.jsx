import React, { Fragment, useState } from 'react';
import defaultuser_src from "../../assets/img/gameDetails/default_user.png";
import coin_src from "../../assets/img/leaderboard/coin.svg";
import first_src from "../../assets/img/leaderboard/first.svg";
import secondorthird_src from "../../assets/img/leaderboard/secondorthird.svg";

export default function LeaderBoardWinners(props) {
    // console.log('***',props.parentProps);
    var leaders=props.parentProps.leaderboard||[];

    return (
        <div id="leaderboard-winners-container">
            <div className="w-100 disp-flex leaderboard-winners-top mt-4 mb-2">
                <div className="w-33 text-center float-left m-0-auto" style={{paddingTop: "27px"}} >
                    <div className="leaderboard-winners-box" >
                        <div className="float-left clearfix text-center leaderboard-winners-box-logo">
                            <img src={defaultuser_src} className="p-1" />
                        </div>
                        <div className="w-b-img-container-2">
                            <img src={secondorthird_src} />
                        </div>
                        <div className="leaderboard-winners-box-title text-center">
                            <div className="winner-box-name">{leaders.length>1?leaders[1].PlayerName:''}</div>
                            <img src={coin_src} style={{marginBottom: "3px"}} />
                            <span className="leaderboard-winners-list-lbl-coins pl-1">{leaders.length>1?leaders[1].Score.toLocaleString():''}</span>
                        </div>
                    </div>
                </div>
                <div className="w-33 text-center float-left m-0-auto" >
                    <div className="leaderboard-winners-box">
                        <div className="float-left clearfix text-center leaderboard-winners-box-logo">
                            <img src={defaultuser_src} className="p-1" />
                        </div>
                        <div className="w-b-img-container-1">
                            <img src={first_src} />
                        </div>
                        <div className="leaderboard-winners-box-title-middle">
                            <div className="winner-box-name">{leaders.length>0?leaders[0].PlayerName:''}</div>
                            <img src={coin_src} style={{marginBottom: "3px"}} />
                            <span className="leaderboard-winners-list-lbl-coins pl-1">{leaders.length>0?leaders[0].Score.toLocaleString():''}</span>
                        </div>
                    </div>
                </div>
                <div className="w-33 text-center float-left m-0-auto" style={{paddingTop: "27px"}} >
                    <div className="leaderboard-winners-box">
                        <div className="float-left clearfix text-center leaderboard-winners-box-logo">
                            <img src={defaultuser_src} className="p-1" />
                        </div>
                        <div className="w-b-img-container-2">
                            <img src={secondorthird_src} />
                        </div>
                        <div className="leaderboard-winners-box-title">
                            <div className="winner-box-name">{leaders.length>2?leaders[2].PlayerName:''}</div>
                            <img src={coin_src} style={{marginBottom: "3px"}} />
                            <span className="leaderboard-winners-list-lbl-coins pl-1">{leaders.length>2?leaders[2].Score.toLocaleString():''}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 disp-flex-root leaderboard-winners-list mt-4 mb-4">
                {leaders && leaders.length > 3 &&
                    leaders.map((obj,indx) => (
                        indx<3 ? null:
                        <div key={indx} className="w-100 float-left clearfix leaderboard-winners-list-box">
                            <div className="w-15 float-left clearfix text-center" style={{position: "relative"}}>
                                <img src={defaultuser_src} className="leaderboard-winners-list-logo p-1" />
                                <div className="ranking-oval">
                                    <span className="ranking-oval-text">{obj.Rank}</span>
                                </div>
                            </div>
                            <div className="w-60 float-left clearfix pt-3 pl-2 leaderboard-winners-list-lbl">
                                <span>{obj.PlayerName}</span>
                            </div>
                            <div className="w-25 float-left clearfix pt-3">
                                <img src={coin_src} style={{marginBottom: "3px"}} />
                                <span className="leaderboard-winners-list-lbl-coins pl-1">{obj.Score.toLocaleString()}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
