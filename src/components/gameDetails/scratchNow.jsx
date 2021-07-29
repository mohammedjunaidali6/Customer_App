import React, { useState, useEffect, Fragment } from 'react';
import ProgressBar from "../common/progressBar";
import group1 from '../../assets/img/gameDetails/Group1.svg';
import group2 from '../../assets/img/gameDetails/Group2.svg';
import group3 from '../../assets/img/gameDetails/Group3.svg';
import { postData } from '../../api/apiHelper';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../common/Spinner/spinner';
import {
    GAME_PROD_HOST_URI,
    GAME_LAUNCH,
    SERVICE_TYPE,
    EVNT_PROD_HOST_URI,
    JOURNEY_TASK_STATUS,
    getCustomerID
} from '../../api/apiConstants';

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

export default function GameDetailScratchNow(props) {
    console.log('**', props)
    const classes = useStyles();
    const [iFrameClick, setIFrameClick] = useState(false);
    const [gameSession, setGameSession] = useState();
    const [taskStatuses, setTaskStatuses] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(false);

    const onPlayNow = () => {
        var data = {
            GameID: props.selectedGameDetail?.Game?.GameID,
            EngagementID: props.selectedGameDetail.EngagementID,
        }
        postData(`${GAME_PROD_HOST_URI}${GAME_LAUNCH}`, data, SERVICE_TYPE.GAME)
            .then(response => {
                setGameSession(response?.GameSessionID);
                setIFrameClick(true);
            });
    }

    useEffect(() => {
        if (Array.isArray(props.engagementDetails.JourneyTasks)) {
            setLoadingTasks(true);
            var data = {
                CustomerID: getCustomerID,
                CustomerEngagedDateTime: props.engagementDetails.GamePlay.customer_engaged_datetime,
                EventsData: props.engagementDetails.JourneyTasks.map(j => {
                    return {
                        EventID: j.EventID,
                        EventValue: j.Value
                    }
                })
            };
            postData(`${EVNT_PROD_HOST_URI}${JOURNEY_TASK_STATUS}`, data, SERVICE_TYPE.EVNT)
                .then(data => {
                    console.log('**', data);
                    setTaskStatuses(data.JourneyTaskStatuses);
                    setLoadingTasks(false);
                })
        } else {
            console.log('** There are NO Journey Tasks');
        }
    }, [])

    return (
        <div className="gamedetail-scratchnow-items">
            <Fragment>
                {props.selectedGameDetail && props.selectedGameDetail.DisplayName ?
                    <div className="scratchnow-big-header">{props.selectedGameDetail.DisplayName}</div> :
                    null}
                <div className="scratchnow-small-header">Scrach more to win </div>
                <div className="scratchnow-item-container">
                    <Loader show={loadingTasks} />
                    {Array.isArray(taskStatuses) && taskStatuses.length > 0 &&
                        <div className={taskStatuses.length < 3 ? 'scratchnow-items-center' : ''}>
                            {taskStatuses.map((taskStatus, idx) => (
                                <div className="scratchnow-box float-left clearfix" key={`scratchnow-box-${idx}`}>
                                    <div className="scratch-box-logo">
                                        <img src={(idx + 1) === 1 ? group1 : ((idx + 1) === 2 ? group2 : group3)} />
                                    </div>
                                    <div className="scratchnow-box-header">
                                        <div style={{ wordBreak: 'break-word' }} >{taskStatus.EventName}</div>
                                    </div>
                                    <div className="scratchnow-box-desc">
                                        <div className="txt-clamp-1">
                                            {taskStatus.HasCompleted ?
                                                'Completed'
                                                :
                                                taskStatus.Pending + ' Items are pending'
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
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
                        {/* <AiOutlineClose id="g-d-iFrame-close" className="close-box m-1" title="Close Game" /> */}
                        <iframe
                            id="g-d-iFrame"
                            src={props.selectedGameDetail?.Game?.GameUrl}
                            height='100%'
                            width='100%'
                        ></iframe>
                    </div>
                ) : null}
            </Fragment>
        </div>
    )
}
