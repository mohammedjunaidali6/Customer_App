import React, { useState, useEffect, Fragment } from 'react';
import ProgressBar from "../common/progressBar";
import number1bw from '../../assets/img/gameDetails/number_1_bw.svg';
import number2bw from '../../assets/img/gameDetails/number_2_bw.svg';
import number3bw from '../../assets/img/gameDetails/number_3_bw.svg';
import number1colored from '../../assets/img/gameDetails/number_1_colored.svg';
import number2colored from '../../assets/img/gameDetails/number_2_colored.svg';
import number3colored from '../../assets/img/gameDetails/number_3_colored.svg';
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
import { getCustomerDetails } from '../common/getStoreData';
import { AiOutlineClose } from 'react-icons/ai';

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
    const classes = useStyles();
    const [iFrameClick, setIFrameClick] = useState(false);
    const [taskStatuses, setTaskStatuses] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(false);
    const token = props.engagementDetails?.GamePlay?.Token;

    var customer=getCustomerDetails();

    const onPlayNow = () => {
        var data = {
            GameID: props.selectedGameDetail?.Game?.GameID,
            EngagementID: props.selectedGameDetail.EngagementID,
            CustomerID:customer.CustomerID
        }
        postData(`${GAME_PROD_HOST_URI}${GAME_LAUNCH}`, data, SERVICE_TYPE.GAME)
            .then(() => {
                setIFrameClick(true);
            });
    }

    useEffect(() => {
        if (Array.isArray(props.engagementDetails?.JourneyTasks)) {
            setLoadingTasks(true);
            var data = {
                CustomerID:customer.CustomerID,
                CustomerEngagedDateTime: props.engagementDetails.GamePlay?.CustomerEngagedDateTime,
                EventsData: props.engagementDetails.JourneyTasks.map(j => {
                    return {
                        EventID: j.EventID,
                        EventName: j.EventDisplayName,
                        EventValue: j.EventValue
                    }
                })
            };
            postData(`${EVNT_PROD_HOST_URI}${JOURNEY_TASK_STATUS}`, data, SERVICE_TYPE.EVNT)
                .then(data => {
                    if (data) {
                        setTaskStatuses(data.JourneyTaskStatuses);
                    } else {
                        console.log('** Journey Tasks Stauses not found');
                        setTaskStatuses([]);
                    }
                    setLoadingTasks(false);
                })
        } else {
            setTaskStatuses([]);
        }
    }, [props.engagementDetails?.JourneyTasks])

    const disablePlayBtn = Array.isArray(taskStatuses) &&
        taskStatuses.length > 0 &&
        taskStatuses.map(task => !task.HasCompleted).length > 0;
    

    return (
        <div className="gamedetail-scratchnow-items">
            <Fragment>
                <div className="scratchnow-big-header">{props.selectedGameDetail?.DisplayName || ''}</div>
                <div className="scratchnow-small-header">Scratch more to win</div>
                <div className="scratchnow-item-container">
                    <Loader show={loadingTasks} radius={26} />
                    {Array.isArray(taskStatuses) && taskStatuses.length > 0 &&
                        <div className={taskStatuses.length < 3 ? 'scratchnow-items-center' : ''}>
                            {taskStatuses.map((taskStatus, idx) => (
                                <div key={idx} className={`float-left clearfix scratchnow-box`} >
                                    <div className="scratch-box-logo">
                                        <img src={(idx + 1) === 1 ?
                                            (taskStatus.HasCompleted ? number1colored : number1bw)
                                            : (idx + 1) === 2 ? (taskStatus.HasCompleted ? number2colored : number2bw)
                                                : (idx + 1) === 3 ? (taskStatus.HasCompleted ? number3colored : number3bw)
                                                    : null
                                        }
                                            alt=''
                                        />
                                    </div>
                                    <div className="scratchnow-box-header">
                                        {taskStatus.EventName}
                                        {/* <div style={{ wordBreak: 'break-word' }} ></div> */}
                                    </div>
                                    <div className="scratchnow-box-desc">
                                        <div className="txt-clamp-1" style={{ color: taskStatus.HasCompleted ? '#72eb63' : '#eb6363' }}>
                                            {taskStatus.HasCompleted ? 'Completed' : taskStatus.Pending + ' tasks Pending'}
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
                        <div className="w-80 m-2 float-left progress-bar-outer">
                            <ProgressBar percentage="90"/>
                        </div>
                        <div className="w-10 float-left lbl-percentage">90%</div>
                    </div>
                </div>
                <div id="btn-scratch-now-container" className="mt-3">
                    <button type="button" id="btn-scratch-now" onClick={onPlayNow} disabled={!disablePlayBtn}>
                        <span className="button-text">PLAY NOW</span>
                    </button>
                </div>
                {iFrameClick &&
                    <div id="g-d-iFrame-sec">
                        <AiOutlineClose id="g-d-iFrame-close" title="Close Game" size={24} onClick={()=>alert(iFrameClick)}/>
                        <iframe
                            id="g-d-iFrame"
                            src={`${props.selectedGameDetail?.Game?.GameUrl}?token=${token}`}
                            height='100%'
                            width='100%'
                        ></iframe>
                    </div>
                }
            </Fragment >
        </div >
    )
}
