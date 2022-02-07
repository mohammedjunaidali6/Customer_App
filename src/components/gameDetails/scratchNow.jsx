import React, { useState, useEffect, Fragment } from 'react';
import ProgressBar from "../common/progressBar";
import number1bw from '../../assets/img/gameDetails/number_1_bw.svg';
import number2bw from '../../assets/img/gameDetails/number_2_bw.svg';
import number3bw from '../../assets/img/gameDetails/number_3_bw.svg';
import number1colored from '../../assets/img/gameDetails/number_1_colored.svg';
import number2colored from '../../assets/img/gameDetails/number_2_colored.svg';
import number3colored from '../../assets/img/gameDetails/number_3_colored.svg';
import close_btn from '../../assets/img/close-btn.png';
import coin_src from '../../assets/img/coin-btn.png';
import { postData } from '../../api/apiHelper';
import dots_progress from '../../assets/img/dots-progress.gif';
import tourn_src from '../../assets/img/tournament.png';
import free from '../../assets/img/free.png'
// import Loader from '../common/Spinner/spinner';
import { getCustomerDetails } from '../common/getStoreData';
import {
    SERVICE_TYPE,
    GAME_PROD_HOST_URI,
    EVNT_PROD_HOST_URI,
    GAME_LAUNCH,
    JOURNEY_TASK_STATUS,
    PURCHASE_RULE_AMOUNT,
} from '../../api/apiConstants';
import store from '../../store/store';


export default function GameDetailScratchNow(props) {
    // console.log('****',props);
    const [iFrameClick, setIFrameClick] = useState(false);
    const [taskStatuses, setTaskStatuses] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState();
    const [startDT, setStartDT] = useState('');
    const [endDT, setEndDT] = useState('');
    const [shopMoreAmount,setShopMoreAmount]=useState(0);
    const [perc,setPerc]=useState(0);
    
    var summary = store.getState().RewardZoneReducer?.playerSummary
    // console.log(props?.props?.parentProps?.playerSummary)
    const token = props.engagementDetails?.GamePlay?.Token;
    const engagement=props.selectedGameDetail;
    var customer=getCustomerDetails();


    const onPlayNow = () => {
        if(engagement.CostToPlay>summary.TotalPoints){
            alert(`Insufficient Balance, need ${engagement.CostToPlay} bCoins to Participate`);
            return;
        }
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
        const sDate = new Date(startDate)
        let timeleft = sDate-now;
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        // console.log(sDate.getMonth()+1)
        // console.log(sDate.getDate()+"-"+(sDate.getMonth()+1)+'-'+sDate.getFullYear())
        // console.log(sDate.getHours())
        if(days>2){
            setStartDT(`Starting on ${startDate?.substring(0,10)}`);
        }else{
            setInterval(()=>{
                now=new Date().getTime();
                timeleft = new Date(startDate)-now;
                let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                let secs = Math.floor((timeleft % (1000 * 60)) / 1000);
                [hours, mins, secs].map((s)=>{
                    if(s <= 9 ) return('0'+s)
                })
                setStartDT(`Starting in ${hours}:${mins}:${secs}`);
            },1000);
        }
    }
    const getEndDateStr=()=>{
        let now=new Date().getTime();
        const endDate=engagement?.EndDate;

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
                setEndDT(`Ending in ${hours}:${mins}:${secs}`);
            },1000);
        }
    }
    const getPurchaseRuleValuePerc=()=>{
        let obj={
            CustomerID:customer?.CustomerID,
            LastNumberOfDays:engagement?.LastNumberOfDays,
            PurchaseRuleValue:engagement?.PurchaseValue
        }
        postData(`${EVNT_PROD_HOST_URI}${PURCHASE_RULE_AMOUNT}`,obj,SERVICE_TYPE.EVNT)
        .then(res=>{
            // console.log('***',res);
            if(res){
                let percentage=engagement.PurchaseValue>res.PurchasedAmount?(res.PurchasedAmount/engagement?.PurchaseValue)*100:100;
                setShopMoreAmount(res.ToBePurchasedToRuleAmount);
                setPerc(percentage);
            }
        });
    }
    
    
    var disablePlayBtn = true;

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
                        setTaskStatuses([]);
                    }
                    setLoadingTasks(false);
                })
        } else {
                setTaskStatuses([]);
        }
        getStartDateStr();
        getEndDateStr();
        getPurchaseRuleValuePerc();
    }, [props.engagementDetails?.JourneyTasks])


    disablePlayBtn = loadingTasks 
        || (Array.isArray(taskStatuses) && taskStatuses.map(task => !task.HasCompleted).length > 0)
        || perc<100
        || (engagement.CostToPlay>summary?.TotalPoints)
        // ||engagement?.PurchaseValue

        // console.log(disablePlayBtn)
        // console.log(taskStatuses.map(task => !task.HasCompleted).length > 0)
        // console.log(taskStatuses.length>0)
    return (
        <div className="gamedetail-scratchnow-items">
            <Fragment>
                <div className='w-100'>
                    {engagement.IsTournament&&<img src={tourn_src} alt="Tournment Label" width={100} height={20}/>}
                    {engagement.CostToPlay?
                        <span className='bcoins-label'>bCoins {engagement?.CostToPlay} &nbsp;
                            <img src={coin_src} height={16} width={16} className='mb-1' alt="" />
                        </span>
                        :
                        <span className='bcoins-label mr-2'>
                            <span  className='eng-h-cost'>
                                <img src={free} alt="Free*" className="free-img"/>
                            </span>
                        </span>
                    }
                </div>
                <div className="scratchnow-big-header">{engagement?.DisplayName || ''}</div>
                <div className="scratchnow-item-container">
                    {/* <Loader show={loadingTasks} radius={26} /> */}
                    { loadingTasks ? <img src={dots_progress} height='20%' width='40%' style={{margin:'20% 30%'}} alt="" /> :
                    Array.isArray(taskStatuses) && taskStatuses.length > 0 &&
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
                        <div className="scratchnow-complete-the-journey">
                        {/* <button 
                            id="btn-scratch-now" 
                            className={disablePlayBtn?'disable-btn':'enable-btn'}
                            onClick={onPlayNow}
                            disabled={disablePlayBtn}
                            style={{"color":"black"}}
                        ><span className={disablePlayBtn?'disable-btn button-text':'button-text enable-btn'} > {perc<100?`Complete Pending Tasks to Play`:'PLAY NOW'}</span>
                        </button> */}
                        </div>
                    }
                    {engagement.PurchaseRuleID>0 && <><div className="w-100 float-left lbl-percentage">{perc}%</div>
                    <div className="w-90 ml-3 float-left progress-bar-outer">
                        <ProgressBar height={'10px'} percentage={perc}/>
                    </div></>}
                </div>
                <div id="btn-scratch-now-container" className="mt-3">
                    {engagement?.IsTournament?
                        <>
                            <button id="btn-scratch-now" onClick={onPlayNow} disabled={disablePlayBtn} className={disablePlayBtn?'disable-btn':'enable-btn'}>
                                {engagement.EngagementStatusID===1&&<span className="button-text" >Play Now</span>}
                                {engagement.EngagementStatusID===4&&<span className="button-text" >{startDT}</span>}
                                {engagement.PurchaseRuleID===3&&<span className='button-text'>{perc}</span>}
                            </button>
                            {engagement.EngagementStatusID===1&&
                                <span className='tournament-labels' style={{marginLeft:'50%',color:'green'}}>{endDT}</span>
                            }
                        </>
                        :
                        <button 
                        id="btn-scratch-now" 
                        className={disablePlayBtn?'disable-btn':'enable-btn'}
                        onClick={onPlayNow}
                        disabled={disablePlayBtn}
                        style={{"color":"black"}}
                    ><span className={disablePlayBtn?'disable-btn button-text':'button-text enable-btn'} > {`Complete Pending Tasks to Play`}</span>
                    </button>
                    //     ?
                    //     <>
                    //     <button 
                    //     id="btn-scratch-now" 
                    //     className={disablePlayBtn?'disable-btn':'enable-btn'}
                    //     onClick={onPlayNow}
                    //     disabled={disablePlayBtn}
                    //     style={{"color":"black"}}
                    // ><span className={disablePlayBtn?'disable-btn button-text':'button-text enable-btn'} >{perc<100?`Shop more for ${shopMoreAmount} to Play`:'PLAY NOW'}</span>
                    // </button>
                    // </>
                    // :
                //     <button 
                //     id="btn-scratch-now" 
                //     className={disablePlayBtn?'disable-btn':'enable-btn'}
                //     onClick={onPlayNow}
                //     disabled={disablePlayBtn}
                //     style={{"color":"black"}}
                // ><span className={disablePlayBtn?'disable-btn button-text':'button-text enable-btn'} >{perc<100?`Shop more to gain Points`:'PLAY NOW'}</span>
                // </button>
                    }
                </div>
                {iFrameClick &&
                    <div id="g-d-iFrame-sec" style={{backgroundColor:'black'}}>
                        <img src={close_btn} alt='close game' width={20} height={20} onClick={()=>setIFrameClick(false)} style={{margin:'4px 4px 0 0',float:'right'}}/>
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
