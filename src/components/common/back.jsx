import React, { useEffect, Fragment } from 'react';
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from 'react-responsive-modal';

import point_box_src from '../../assets/img/rewardZone/gem_home.svg';
import trophy_src from '../../assets/img/rewardZone/trophy_home.svg';
import rank_src from '../../assets/img/rewardZone/Rank__home.svg';
import rupee_src from '../../assets/img/rewardZone/rupee_home.svg';
import share_src from '../../assets/img/gameDetails/share.svg';
import { getData } from '../../api/apiHelper';
import { Reporting_Host_URI, PLAYER_SUMMARY } from '../../api/apiConstants';
import { useState } from 'react';
// import { GlobalModal } from "./global";

export default function Back(props) {

    const [open, setOpen] = React.useState(false);
    const [summary, setSummary] = useState();


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

    useEffect(() => {
        getData(`${Reporting_Host_URI}/rept/playersummary`).then(summary => {
            setSummary(summary);
            props.parentProps.rewardZoneActionHandler?.setPlayerSummary(summary);
        })
    }, []);

    return (
        // default back container height will be 128px
        <>
            <div id="back-container" className="" style={{ height: `${props.height}px` }}>
                <div className="back-container-content" >
                    {!props.fromRewardZone && !props.fromNotification ? (
                        <i className="arrow left" onClick={() => bactToRewardFn()} ></i>
                    ) : null}
                    <span className={`back-header ${props.fromRewardZone || props.fromNotification ? `` : ``}`}
                        onClick={() => bactToRewardFn()}>
                        {props.fromRewardZone || props.fromNotification || props.fromLeaderBoard ? `` : `Back to `}{props.backTitle ? props.backTitle : `Reward Zone`}</span>
                    {props.fromRewardZone ? (
                        <AiOutlineClose className="close-box" onClick={() => closeAppFn()} />
                    ) : null}
                    {props.fromNotification ? (
                        <AiOutlineClose className={`close-box ${props.fromNotification ? `` : `mr-2`}`} onClick={() => closeNotificationFn()} />
                    ) : null}
                    {props.fromGameDetail ? (
                        <img src={share_src} alt="Share" className="share-img" />
                    ) : null}
                    {!props.fromNotification && !props.fromGameDetail && !props.fromLeaderBoard ? (
                        <Fragment>
                            <BsFillBellFill className={`notification-box ${props.fromTransactionHistory || props.fromUserRewards || props.fromRanking || props.fromStatus ? `` : `mr-2`}`} onClick={() => notificationFn()} ></BsFillBellFill>
                            <span className={`notification-count ${props.fromTransactionHistory || props.fromUserRewards || props.fromRanking || props.fromStatus ? `n-c-right20` : ``}`} >6</span>
                        </Fragment>
                    ) : null}
                    {/* <div className="notification-box">
                    <span className="notification-count">6</span>
                    <div className="notification-bell">
                        <span className="bell-top"></span>
                        <span className="bell-middle"></span>
                        <span className="bell-bottom"></span>
                        <span className="bell-rad"></span>
                    </div>
                </div> */}
                    {props.fromRewardZone ? (
                        <div id="reward-zone-detail-box-container">
                            <div id="point-box" className="detail-box-content mb-3" onClick={() => props.pointsOpenFn()}>
                                <img className="float-left" src={point_box_src} />
                                <div className="float-left pl-2">
                                    <div className="rzdb-header" >{summary?.FormattedTotalPoints || 0}</div>
                                    <div className="rzdb-desc" >Points</div>
                                </div>
                            </div>
                            <div id="amount-saved-box" className="detail-box-content mb-3 float-right" onClick={() => props.customerSavingsOpenFn()}>
                                <img className="float-left" src={rupee_src} />
                                <div className="float-left pl-2">
                                    <div className="rzdb-header" >{`$${summary?.FormattedTotalSavings || 0}`}</div>
                                    <div className="rzdb-desc" >Amount Saved</div>
                                </div>
                            </div>
                            <div id="rewards-box" className="detail-box-content" onClick={() => props.rewardOpenFn()}>
                                <img className="float-left" src={trophy_src} />
                                <div className="float-left pl-2">
                                    <div className="rzdb-header">{summary?.TotalActiveRewards || 0}</div>
                                    <div className="rzdb-desc" >Rewards</div>
                                </div>
                            </div>
                            <div id="rank-box" className="detail-box-content float-right" onClick={() => props.rankingOpenFn()}>
                                <img className="float-left" src={rank_src} />
                                <div className="float-left pl-2">
                                    <div className="rzdb-header" >{summary?.TopRank || 0}</div>
                                    <div className="rzdb-desc" >Rank</div>
                                </div>
                            </div>
                        </div>
                    ) : null}
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
                            <span className="button-text">YES, EXIT</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
