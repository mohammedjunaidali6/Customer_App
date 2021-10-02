import React, { useEffect, Fragment, useState } from 'react';
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from 'react-responsive-modal';
import point_box_src from '../../assets/img/rewardZone/gem_home.svg';
import trophy_src from '../../assets/img/rewardZone/trophy_home.svg';
import rank_src from '../../assets/img/rewardZone/Rank_home.svg';
import rupee_src from '../../assets/img/rewardZone/rupee_home.svg';
import share_src from '../../assets/img/gameDetails/share.svg';
import dots_progress from '../../assets/img/dots-progress.gif';
import { postData } from '../../api/apiHelper';
import { 
    SERVICE_TYPE,
    REPT_PROD_HOST_URI,
    PLAYER_SUMMARY,
} from '../../api/apiConstants';

export default function Back(props) {
    // console.log('****',props);
    const [open, setOpen] = useState(false);
    const [summaryLoading, setSummaryLoading] = useState(false);

    const summary=props?.parentProps?.playerSummary;

    function bactToRewardFn() {
        if (props.backTitle && props.backTitle === 'Notifications') { return false; }
        if (props.parentProps && props.parentProps.history) {
            if (props.parentProps.history.location.pathname !== '/rewardzone') {
                props.parentProps.history.push('/rewardzone');
            }
        }
    }

    function closeAppFn() {
        setOpen(true);
    }

    function closeNotificationFn() {
        props.parentProps.history.push('/rewardzone');
    }

    function exitApp() {
        props.parentProps.history.push('/');
    }

    function notificationFn() {
        props.parentProps.history.push('/notification');
    }

    useEffect(()=>{
        if(props.fromRewardZone&&!props?.parentProps?.playerSummary){
            setSummaryLoading(true);
            let data={
                CustomerID:props.customerID
            }
            postData(`${REPT_PROD_HOST_URI}${PLAYER_SUMMARY}`,data, SERVICE_TYPE.REPT)
                .then(summary => {
                    props.parentProps.rewardZoneActionHandler.setPlayerSummary(summary);
                    setSummaryLoading(false);
               })
        }
    },[props.customerID]);

    return (
        // default back container height will be 128px
        <>
            <div id="back-container" className="" style={{ height: `${props.height}px` }}>
                <div className="back-container-content" >
                    {!props.fromRewardZone && !props.fromNotification ?
                        <Fragment>
                            <i className="arrow left" onClick={() => bactToRewardFn()} ></i>
                            <span className={`back-header`} onClick={() => bactToRewardFn()}>Back</span>
                        </Fragment>
                        :                    
                        <span className={`back-header`}>Entertainment Zone</span>
                    }
                    {props.fromRewardZone &&
                        <AiOutlineClose className="close-box" onClick={() => closeAppFn()} />
                    }
                    {props.fromNotification &&
                        <AiOutlineClose className='close-box' onClick={() => closeNotificationFn()} />
                    }
                    {props.fromGameDetail &&
                        <img src={share_src} alt="Share" className="share-img" />
                    }
                    {/* {!props.fromNotification && !props.fromGameDetail && !props.fromLeaderBoard ? (
                        <Fragment>
                            <BsFillBellFill
                                className={`notification-box ${props.fromTransactionHistory || props.fromUserRewards || props.fromRanking || props.fromStatus ? `` : `mr-2`}`}
                                onClick={() => notificationFn()}
                            >
                            </BsFillBellFill>
                            <span
                                className={`notification-count ${props.fromTransactionHistory || props.fromUserRewards || props.fromRanking || props.fromStatus ? `n-c-right20` : ``}`}
                                onClick={() => notificationFn()}
                            >6
                            </span>
                        </Fragment>
                    ) : null} */}
                    {/* <div className="notification-box">
                    <span className="notification-count">6</span>
                    <div className="notification-bell">
                        <span className="bell-top"></span>
                        <span className="bell-middle"></span>
                        <span className="bell-bottom"></span>
                        <span className="bell-rad"></span>
                    </div>
                </div> */}
                    
                    <div id="reward-zone-detail-box-container">
                        {props.fromRewardZone &&
                            (summaryLoading?
                            <img src={dots_progress} height='20%' width='40%' style={{margin:'20% 30%'}}/>
                            :
                            <Fragment>
                                <div id="point-box" className="detail-box-content mb-3" onClick={() => props.pointsOpenFn()}>
                                    <img className="float-left" src={point_box_src} />
                                    <div className="float-left pl-2">
                                        <div className="rzdb-header" >{summary?.FormattedTotalPoints || ''}</div>
                                        <div className="rzdb-desc" >Points</div>
                                    </div>
                                </div>
                                <div id="amount-saved-box" className="detail-box-content mb-3 float-right" onClick={() => props.customerSavingsOpenFn()}>
                                    <img className="float-left" src={rupee_src} />
                                    <div className="float-left pl-2">
                                        <div className="rzdb-header" >{`${summary?.FormattedTotalSavings || ''}`}</div>
                                        <div className="rzdb-desc" >Amount Saved</div>
                                    </div>
                                </div>
                                <div id="rewards-box" className="detail-box-content" onClick={() => props.rewardOpenFn()}>
                                    <img className="float-left" src={trophy_src} />
                                    <div className="float-left pl-2">
                                        <div className="rzdb-header">{summary?.TotalActiveRewards}</div>
                                        <div className="rzdb-desc" >Rewards</div>
                                    </div>
                                </div>
                                <div id="rank-box" className="detail-box-content float-right"  style={{paddingBottom:'10px'}} onClick={props.tournamentsOpenFn}>
                                    <img className="float-left" src={rank_src} />
                                    <div className="float-left pl-2">
                                        <div className="rzdb-desc" style={{textAlign:'center'}}>My</div>
                                        <div className="rzdb-desc" style={{textAlign:'center'}}>Tournaments</div>
                                    </div>
                                </div>
                            </Fragment>
                            )
                        }
                    </div>
                    {props.fromTournaments&&
                        <div>
                            
                        </div>
                    }
                </div>
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlayAnimationIn: 'customEnterOverlayAnimation',
                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                    modalAnimationIn: 'customEnterModalAnimation',
                    modalAnimationOut: 'customLeaveModalAnimation',
                }}
                animationDuration={800}
                showCloseIcon={false}
            >
                <div id="modal-container">
                    <div className="modal-desc">
                        Do you really wish to close the App?
                    </div>
                    <div className="w-100 text-center">
                        <button id="modal-no" type="button" className="modal-no mr-4" onClick={() => setOpen(false)}>
                            <span className="button-text">No, Stay on this</span>
                        </button>
                        <button id="modal-yes" type="button" className="modal-yes" onClick={() => exitApp(false)}>
                            <span className="button-text">Yes, Exit</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
