import React, { Fragment } from 'react';
import Back from "../common/back";

import master_src from '../../assets/img/rewardZone/master.svg';
import benefits_src from '../../assets/img/rewardZone/Benefits_home.svg';
import invitation_src from '../../assets/img/rewardZone/invitation.svg';
import invitation_bg_src from '../../assets/img/rewardZone/invite_bg.png';
import basketball_src from '../../assets/img/rewardZone/game1.png';
import bingo_src from '../../assets/img/rewardZone/game2.png';
import './gameDetails.css';
import GameDetailGameInfo from './gameInfo';
import GameDetailScratchNow from "./scratchNow";
import GameDetailRewards from "./rewards";
import GameDetailWhoElseplaying from "./whoElsePlaying";
import GameDetailHowToPlay from "./howToPlay";

const tempArray = [
    {
        id: 1, 
        winners: 14, 
        amountWon: 1247, 
        logo: basketball_src, 
        offerText: '3 Lucky Winners to Get 50% of an iPhone',
        progress: 47
    },
    {
        id: 2, 
        winners: 147, 
        amountWon: 35789, 
        logo: bingo_src, 
        offerText: 'Enjoy Free Shipping for Next 3 Months',
        progress: 21
    },
    {
        id: 3, 
        winners: 87, 
        amountWon: 5897, 
        logo: null, 
        offerText: 'Exclusive 18 % on All Shoes for Purchases',
        progress: 67
    },
    {
        id: 4, 
        winners: 173, 
        amountWon: 87542, 
        logo: null, 
        offerText: 'Jackpot reward of INR 1000 on Next 10 Purchases',
        progress: 87
    }
];

export default function GameDetail(props) {
    
    return (
        <Fragment>
            <Back height="190" fromGameDetail={true} />
            <GameDetailGameInfo />
            <GameDetailScratchNow />
            <div className="w-90 disp-flex-root common-divider float-left ml-4"></div>
            <GameDetailRewards />
            <GameDetailWhoElseplaying />
            <GameDetailHowToPlay />
        </Fragment>
    )
}
