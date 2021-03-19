import React, { Fragment } from 'react';

import rule_src from '../../assets/img/gameDetails/rule.svg';

const tempArray = [
    {
        id: 1, 
        header: 'Rule 1', 
        content: 'This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations'
    },
    {
        id: 2, 
        header: 'Rule 2', 
        content: 'This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations'
    },
    {
        id: 3, 
        header: 'Rule 3', 
        content: 'This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations'
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
            ): null}
        </Fragment>
    )
}
