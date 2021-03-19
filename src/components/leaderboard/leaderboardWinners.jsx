import React, { Fragment, useState } from 'react';

import defaultuser_src from "../../assets/img/gameDetails/default_user.png";
import coin_src from "../../assets/img/leaderboard/coin.svg";
import first_src from "../../assets/img/leaderboard/first.svg";
import secondorthird_src from "../../assets/img/leaderboard/secondorthird.svg";

const tempArray = [
    {
        id: 1,
        name: 'Anna Marie R',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 2,
        name: 'Richard Wills',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 3,
        name: 'Rayan Mathew',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 4,
        name: 'Allice Roy',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 5,
        name: 'Joe Root',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 6,
        name: 'Stuart Broad',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 7,
        name: 'Jamie Anderson',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 8,
        name: 'Harslry Burns',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 9,
        name: 'Ben Stokes',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 10,
        name: 'Jos Buttler',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 11,
        name: 'Jasprit Bumrah',
        amount: '3,234 K',
        userLogo: ''
    },
    {
        id: 12,
        name: 'Virat Kholi',
        amount: '3,234 K',
        userLogo: ''
    }
];


export default function LeaderBoardWinners(props) {
    const[first3Place, setfirst3Place] = useState(tempArray && tempArray.length > 0 ? tempArray.slice(0,3) : []);
    const[remainingPlaces, setremainingPlaces] = useState(tempArray && tempArray.length > 3 ? tempArray.slice(3,tempArray.length) : []);

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
                            <div className="winner-box-name">{first3Place[0].name}</div>
                            <img src={coin_src} style={{marginBottom: "3px"}} />
                            <span className="leaderboard-winners-list-lbl-coins pl-1">{first3Place[0].amount}</span>
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
                            <div className="winner-box-name">{first3Place[1].name}</div>
                            <img src={coin_src} style={{marginBottom: "3px"}} />
                            <span className="leaderboard-winners-list-lbl-coins pl-1">{first3Place[1].amount}</span>
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
                            <div className="winner-box-name">{first3Place[2].name}</div>
                            <img src={coin_src} style={{marginBottom: "3px"}} />
                            <span className="leaderboard-winners-list-lbl-coins pl-1">{first3Place[2].amount}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 disp-flex-root leaderboard-winners-list mt-4 mb-4">
                {remainingPlaces && remainingPlaces.length > 0 ? (
                    remainingPlaces.map((obj) => (
                        <div key={obj.id} className="w-100 float-left clearfix leaderboard-winners-list-box">
                            <div className="w-15 float-left clearfix text-center" style={{position: "relative"}}>
                                <img src={defaultuser_src} className="leaderboard-winners-list-logo p-1" />
                                <div className="ranking-oval">
                                    <span className="ranking-oval-text">{obj.id}</span>
                                </div>
                            </div>
                            <div className="w-60 float-left clearfix pt-3 pl-2 leaderboard-winners-list-lbl">
                                <span>{obj.name}</span>
                            </div>
                            <div className="w-25 float-left clearfix pt-3">
                                <img src={coin_src} style={{marginBottom: "3px"}} />
                                <span className="leaderboard-winners-list-lbl-coins pl-1">2,345 K</span>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    )
}
