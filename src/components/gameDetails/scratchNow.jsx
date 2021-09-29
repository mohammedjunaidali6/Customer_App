import React, { useState, useEffect, Fragment } from 'react';
import ProgressBar from "../common/progressBar";
import { AiOutlineClose } from 'react-icons/ai';
import store from '../../store/store';
import { date } from 'yup';
import number1bw from '../../assets/img/gameDetails/number_1_bw.svg';
import number2bw from '../../assets/img/gameDetails/number_2_bw.svg';
import number3bw from '../../assets/img/gameDetails/number_3_bw.svg';
import number1colored from '../../assets/img/gameDetails/number_1_colored.svg';
import number2colored from '../../assets/img/gameDetails/number_2_colored.svg';
import number3colored from '../../assets/img/gameDetails/number_3_colored.svg';
import { postData } from '../../api/apiHelper';
import Loader from '../common/Spinner/spinner';
import { getCustomerDetails } from '../common/getStoreData';
import {
    SERVICE_TYPE,
    GAME_PROD_HOST_URI,
    EVNT_PROD_HOST_URI,
    GAME_LAUNCH,
    JOURNEY_TASK_STATUS,
    PURCHASE_RULE_AMOUNT,
} from '../../api/apiConstants';


export default function GameDetailScratchNow(props) {
    console.log('****',props);
    const [iFrameClick, setIFrameClick] = useState(false);
    const [taskStatuses, setTaskStatuses] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(false);
    const [startDT, setStartDT] = useState('');
    const [endDT, setEndDT] = useState('');
    const [perc,setPerc]=useState(0);
    
    const token = props.engagementDetails?.GamePlay?.Token;
    const engagement=props.selectedGameDetail;
    var customer=getCustomerDetails();
    // var rewardZoneReducer=store.getState().RewardZoneReducer;
    // var ruleAmounts=rewardZoneReducer.engagementRuleAmounts;
    // const perc=ruleAmounts.find(r=>r.EngagementID==engagement.EngagementID)?.Percentage||0;
    // console.log('***',ruleAmounts);

    const onPlayNow = () => {
        var data = {
            GameID: engagement?.Game?.GameID,
            EngagementID: engagement.EngagementID,
            CustomerID:customer.CustomerID
        }
        postData(`${GAME_PROD_HOST_URI}${GAME_LAUNCH}`, data, SERVICE_TYPE.GAME)
            .then(() => {
                setIFrameClick(true);
            });
    }
    const getStartDateStr=()=>{
        let now=new Date().getTime();
        const startDate=engagement?.StartDate;
        console.log('***',startDate)
        let timeleft = new Date(startDate)-now;
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        if(days>2){
            setStartDT(`Starting on ${startDate?.substring(0,10)}`);
        }else{
            setInterval(()=>{
                now=new Date().getTime();
                timeleft = new Date(startDate)-now;
                let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                let secs = Math.floor((timeleft % (1000 * 60)) / 1000);
                setStartDT(`Starting in ${hours}:${mins}:${secs} secs`);
            },1000);
        }
    }
    const getEndDateStr=()=>{
        let now=new Date().getTime();
        const endDate=engagement?.EndDate;
        console.log('***',endDate)
        let timeleft = new Date(endDate)-now;
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        if(days>2){
            setEndDT(`Ending on ${engagement?.EndDate.substring(0,10)}`);
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
    const getPurchaseRuleValuePerc=()=>{
        let obj={
            CustomerID:customer?.CustomerID,
            LastNumberOfDays:engagement?.LastNumberOfDays,
            PurchaseRuleValue:engagement?.PurchaseValue
        }
        console.log('***',obj);
        postData(`${EVNT_PROD_HOST_URI}${PURCHASE_RULE_AMOUNT}`,obj,SERVICE_TYPE.EVNT)
        .then(res=>{
            if(res){
                console.log('***',res);
                let percentage=engagement.PurchaseValue>res?(res.ToBePurchasedToRuleAmount/engagement?.PurchaseValue)*100:100;
                setPerc(percentage);
                console.log('***',percentage);
            }
        });
    }

    var disablePlayBtn = Array.isArray(taskStatuses) &&
        taskStatuses.length > 0 &&
        taskStatuses.map(task => !task.HasCompleted).length > 0;
    
        disablePlayBtn=disablePlayBtn|| perc<100;


    useEffect(() => {
        getStartDateStr();
        getEndDateStr();
        getPurchaseRuleValuePerc();

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
                        setTaskStatuses([]);
                    }
                    setLoadingTasks(false);
                })
        } else {
            setTaskStatuses([]);
        }
    }, [props.engagementDetails?.JourneyTasks])

    return (
        <div className="gamedetail-scratchnow-items">
            <Fragment>
                {engagement.IsTournament&&
                    <div>
                        <span style={{color:'#FFFFFF',fontSize:'12px',fontFamily:'Roboto',padding:'2px',backgroundColor:'red'}}>Tournament</span>
                    </div>
                }
                <div className="scratchnow-big-header">{engagement?.DisplayName || ''}</div>
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
                    {Array.isArray(taskStatuses) && taskStatuses.length > 0 &&
                        <div className="scratchnow-complete-the-journey">Complete the journey to participate</div>
                    }
                    <div className="w-100 float-left lbl-percentage">{perc}%</div>
                    <div className="w-90 ml-3 float-left progress-bar-outer">
                        <ProgressBar height={'10px'} percentage={perc}/>
                    </div>
                </div>
                <div id="btn-scratch-now-container" className="mt-3">
                    {engagement?.IsTournament?
                        <button id="btn-scratch-now" className={`${engagement.EngagementStatusID==1?'enable-btn':'disable-btn'}`} onClick={onPlayNow} disabled={engagement.EngagementStatusID!=1}>
                            {engagement.EngagementStatusID===1&&<span className="button-text">{endDT}</span>}
                            {engagement.EngagementStatusID===4&&<span className="button-text" style={{color:'#000000'}}>{startDT}</span>}
                        </button>
                        :
                        <button 
                            id="btn-scratch-now" 
                            className={`${disablePlayBtn?'disable-btn':'enable-btn'}`} 
                            onClick={onPlayNow}
                        ><span className="button-text">PLAY NOW</span>
                        </button>
                    }
                </div>
                {iFrameClick &&
                    <div id="g-d-iFrame-sec">
                        {/* <AiOutlineClose id="iFrame-close" title="Close Game" size={24} onClick={()=>setIFrameClick(false)}/> */}
                        <iframe
                            id="g-d-iFrame"
                            src={`${engagement?.Game?.GameUrl}?token=${token}`}
                            height='100%'
                            width='100%'
                        ></iframe>
                    </div>
                }
            </Fragment >
        </div >
    )
}
