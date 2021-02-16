import React, { Fragment } from 'react';
import Back from "../common/back";
import basketball_src from '../../assets/img/rewardZone/game1.png';
import bingo_src from '../../assets/img/rewardZone/game2.png';
import './transactionHistory.css';

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

export default function TransactionHistory(props) {
    
    return (
        <div id="transaction-history-container">
            <Back parentProps={props} fromTransactionHistory={true} />
        </div>
    )
}
