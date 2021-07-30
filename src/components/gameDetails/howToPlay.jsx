import React, { Fragment } from 'react';

import rule_src from '../../assets/img/gameDetails/rule.svg';

const tempArray = [
    {
        id: 1,
        header: 'Rule 1',
        content: 'You can participate in the Game any number of times, and get a chance to win Mystery Awards during the Game Play.'
    },
    {
        id: 2,
        header: 'Rule 2',
        content: 'Complete the Journey Assigned to the Game to be Eligible to Participate'
    },
    {
        id: 3,
        header: 'Rule 3',
        content: 'Compete with your Friends, Play More to secure high scores to win the Exciting Prizes.'
    },
    {
        id: 4,
        header: 'Rule 4',
        content: `How to Redeem:
            - Visit My Reward Section, and Click on Shop Now button to navigate to your favorite category of Products.
            - Select the Product You wish to purchase and apply the Voucher Code on Check Out.`
    },
    {
        id: 5,
        header: 'Rule 5',
        content: 'Voucher is applicable to any categories of the Product given its applied before the Expiry Date.'
    }

];

export default function GameDetailHowToPlay(props) {

    return (
        <Fragment>
            {tempArray && tempArray.length > 0 ? (
                <div className="gamedetail-howtoplay-items">
                    <Fragment>
                        <div className="how-to-play">How to Play</div>
                        {tempArray.map((obj) => (
                            <div key={obj.id} className="w-100 howtoplay-item" >
                                <div className="w-20 howtoplay-logo">
                                    <img src={rule_src} />
                                </div>
                                <div className="common-divider"></div>
                                <div className="w-80 howtoplay-rule-detail">
                                    <div className="howtoplay-rule-header">{obj.header}</div>
                                    <div className="howtoplay-rule-desc">{obj.content}</div>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                </div>
            ) : null}
        </Fragment>
    )
}
