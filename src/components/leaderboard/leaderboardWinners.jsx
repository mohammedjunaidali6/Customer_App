import React, { Fragment, useEffect, useState } from 'react';
import defaultuser_src from "../../assets/img/gameDetails/default_user.png";
import coin_src from "../../assets/img/leaderboard/coin.svg";
import first_src from "../../assets/img/leaderboard/first.svg";
import secondorthird_src from "../../assets/img/leaderboard/secondorthird.svg";
import store from '../../store/store';

export default function LeaderBoardWinners(props) {
    // console.log('***',props.parentProps);
    const [endDT, setEndDT] = useState('');
    var leaders=props.parentProps||[];

    var selectedEngagement=store.getState().RewardZoneReducer.selectedEngagement;

    const getEndDateStr=()=>{
        let now=new Date().getTime();
        const endDate=selectedEngagement?.EndDate;

        let timeleft = new Date(endDate)-now;
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        if(days>2){
            setEndDT(`Ending on ${selectedEngagement?.EndDate.substring(0,10)}`);
        }else{
            setInterval(()=>{
                now=new Date().getTime();
                timeleft = new Date(endDate) - now;
                let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                let secs = Math.floor((timeleft % (1000 * 60)) / 1000);
                setEndDT(`Ending in ${hours}:${mins}:${secs} secs`);
            },1000);
        }
    }
    const status="Let's start the fun, Play Now to win exciting prize";
    const note="Ranks are on the based on time of Participation";

    useEffect(()=>{
        getEndDateStr();
    },[])

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
                        {leaders.length>1&&
                            <div className="leaderboard-winners-box-title text-center">
                                <div className="winner-box-name">{leaders[1].PlayerName||''}</div>
                                <img src={coin_src} style={{marginBottom: "3px"}} />
                                <span className="leaderboard-winners-list-lbl-coins pl-1">{leaders[1].Score?.toLocaleString()||''}</span>
                            </div>
                        }
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
                        {leaders.length>0&&
                            <div className="leaderboard-winners-box-title-middle">
                                <div className="winner-box-name">{leaders[0].PlayerName||''}</div>
                                <img src={coin_src} style={{marginBottom: "3px"}} />
                                <span className="leaderboard-winners-list-lbl-coins pl-1">{leaders[0].Score?.toLocaleString()||''}</span>
                            </div>
                        }
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
                        {leaders.length>2&&
                            <div className="leaderboard-winners-box-title">
                                <div className="winner-box-name">{leaders[2].PlayerName||''}</div>
                                <img src={coin_src} style={{marginBottom: "3px"}} />
                                <span className="leaderboard-winners-list-lbl-coins pl-1">{leaders[2].Score?.toLocaleString()||''}</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div style={{fontSize: '14px', color: '#5d79f6', fontFamily: 'Roboto',textAlign:'center'}}>
                {selectedEngagement?.EngagementStatusID===1?endDT:''}
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
                            {obj.Score&&
                                <div className="w-25 float-left clearfix pt-3">
                                    <img src={coin_src} style={{marginBottom: "3px"}} />
                                    <span className="leaderboard-winners-list-lbl-coins pl-1">{obj.Score.toLocaleString()}</span>
                                </div>
                            }    
                        </div>
                    ))
                }
                {leaders.length==0?
                    <span style={{fontSize: '14px', color: '#5d79f6', fontFamily: 'Roboto'}}>{status}</span>
                    :
                    <span style={{fontSize: '14px', color: '#5d79f6', fontFamily: 'Roboto'}}>{note}</span>
                }
            </div>
        </div>
    )
}
