import React, { useState, Fragment } from 'react';
import ProgressBar from "../common/progressBar";
import iFrame from 'react-iframe';
import { AiOutlineClose } from "react-icons/ai";
import group1 from '../../assets/img/gameDetails/Group1.svg';
import group2 from '../../assets/img/gameDetails/Group2.svg';
import group3 from '../../assets/img/gameDetails/Group3.svg';
import Iframe from 'react-iframe';
import { gameAssetsPath, Gameplay_Host_URI, GAME_EXIT, GAME_LAUNCH } from '../../api/apiConstants';
import { useEffect } from 'react';
import { getData, postData } from '../../api/apiHelper';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));

const tempArray = [
    {
        id: 1,
        lblPrize: '1st Prize',
        lblDiscount: '50% Flat off iPhone',
        prize: '50%',
        discount: 'FLAT DISCOUNT'
    },
    {
        id: 2,
        lblPrize: '2nd Prize',
        lblDiscount: '1000 Points',
        prize: '1000',
        discount: 'POINTS'
    },
    {
        id: 3,
        lblPrize: '3rd Prize',
        lblDiscount: 'Rs. 300 off',
        prize: '$300',
        discount: 'FLAT DISCOUNT'
    },
    {
        id: 4,
        lblPrize: '4th Prize',
        lblDiscount: 'Rs. 100 off',
        prize: '$100',
        discount: 'FLAT DISCOUNT'
    }
];

export default function GameDetailScratchNow(props) {

    const classes = useStyles();
    const [iFrameClick, setIFrameClick] = useState(false);
    const [gameSession, setGameSession] = useState();
    console.log('***', props)


    const onPlayNow = () => {
        var data = {
            GameID: props.selectedGameDetail?.Game?.GameID,
            EngagementID: props.selectedGameDetail.EngagementID,
        }
        postData(`${Gameplay_Host_URI}${GAME_LAUNCH}`, data)
            .then(response => {
                setGameSession(response?.GameSessionID);
                setIFrameClick(true);
            });
    }

    const onPlayExit = () => {
        var data = {
            GameSessionID: gameSession,
            CurrentLevel: 2,
            CurrentScore: 123
        }
        postData(`${Gameplay_Host_URI}${GAME_EXIT}`, data)
            .then(response => {
                setIFrameClick(false);
                console.log('***', response)
            });
    }

    return (
        <div className="gamedetail-scratchnow-items">
            <Fragment>
                {props.selectedGameDetail && props.selectedGameDetail.DisplayName ?
                    <div className="scratchnow-big-header">{props.selectedGameDetail.DisplayName}</div> :
                    null}
                <div className="scratchnow-small-header">Scrach more to win </div>
                <div className="scratchnow-item-container">
                    {props.JourneyTasks && props.JourneyTasks.length > 0 ? (
                        <div className={props.JourneyTasks.length < 3 ? 'scratchnow-items-center' : ''}>
                            {props.JourneyTasks.map((jObj, idx) => (
                                <div className="scratchnow-box float-left clearfix" key={`scratchnow-box-${idx}`}>
                                    <div className="scratch-box-logo">
                                        <img src={(idx + 1) === 1 ? group1 : ((idx + 1) === 2 ? group2 : group3)} />
                                    </div>
                                    <div className="scratchnow-box-header">
                                        <div style={{ wordBreak: 'break-word' }} >{jObj.EventDisplayName}</div>
                                    </div>
                                    <div className="scratchnow-box-desc">
                                        <div className="txt-clamp-1">{jObj.status || 'Not completed'}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                <div className="w-100 float-left clearfix ">
                    <div className="scratchnow-complete-the-journey">Complete the journey to participate</div>
                    <div className="w-100">
                        <div className="w-90 mt-1 float-left progress-bar-outer">
                            <ProgressBar percentage="90" />
                        </div>
                        <div className="w-10 float-left lbl-percentage">90%</div>
                    </div>
                </div>
                <div id="btn-scratch-now-container" className="mt-3">
                    <button type="button" id="btn-scratch-now" onClick={onPlayNow}>
                        <span className="button-text">PLAY NOW</span>
                    </button>
                </div>
                {iFrameClick ? (
                    <div id="g-d-iFrame-sec">
                        <AiOutlineClose id="g-d-iFrame-close" className="close-box m-1" title="Close Game" onClick={onPlayExit} />
                        <iframe id="g-d-iFrame" src={props.selectedGameDetail?.Game?.GameUrl} height='100%' width='100%' ></iframe>
                        {console.log('***', props.selectedGameDetail?.Game?.GameUrl)/* https://picsum.photos/400/600 */}
                    </div>
                ) : null}
            </Fragment>
        </div>
    )
}
