import React, { Fragment, useEffect, useState } from 'react';
import {
    SERVICE_TYPE,
    GAME_PROD_HOST_URI,
    GET_GAME_RULES,
} from '../../api/apiConstants';
import store from '../../store/store';
import { getData } from '../../api/apiHelper';

import rule_src from '../../assets/img/gameDetails/rule.svg';

// const tempArray = [
//     {
//         id: 1,
//         header: 'Rule 1',
//         content: 'You can participate in the Game any number of times, and get a chance to win Mystery Awards during the Game Play.'
//     },
//     {
//         id: 2,
//         header: 'Rule 2',
//         content: 'Complete the Journey Assigned to the Game to be Eligible to Participate'
//     },
//     {
//         id: 3,
//         header: 'Rule 3',
//         content: 'Compete with your Friends, Play More to secure high scores to win the Exciting Prizes.'
//     },
//     {
//         id: 4,
//         header: 'Rule 4',
//         content: `How to Redeem:
//             - Visit My Reward Section, and Click on Shop Now button to navigate to your favorite category of Products.
//             - Select the Product You wish to purchase and apply the Voucher Code on Check Out.`
//     },
//     {
//         id: 5,
//         header: 'Rule 5',
//         content: 'Voucher is applicable to any categories of the Product given its applied before the Expiry Date.'
//     }

// ];

export default function GameDetailHowToPlay(props) {
    const [gameRules, setGameRules] = useState([])
    const [loadingRules, setLoadingRules] = useState(false)
    useEffect(()=>{
        try{
            setLoadingRules(true)
            getData(`${GAME_PROD_HOST_URI}${GET_GAME_RULES}${props.gameId}`, SERVICE_TYPE.GAME)
                .then(data => {
                    // console.log("data  :",data);
                    if (data) {
                        setGameRules(data);
                    } else {
                        setGameRules([]);
                    }
                    setLoadingRules(false);
                })

        } catch(e){
            console.log(e)
        }
    },[])

    return (
        <Fragment>
            {gameRules && gameRules.length > 0 && !loadingRules ? (
                <div className="gamedetail-howtoplay-items">
                    <Fragment>
                        <div className="how-to-play">How to Play</div>
                        {gameRules.map((obj) => (
                            <div key={obj.id} className="w-100 howtoplay-item" >
                                <div className="w-20 howtoplay-logo">
                                    <img src={rule_src} />
                                </div>
                                <div className="common-divider"></div>
                                <div className="w-80 howtoplay-rule-detail">
                                    <div className="howtoplay-rule-header">{obj.game_rule_title}</div>
                                    <div className="howtoplay-rule-desc">{obj.game_rule_text}</div>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                </div>
            ) : null}
        </Fragment>
    )
}
