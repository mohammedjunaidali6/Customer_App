import React from 'react';
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from 'react-responsive-modal';

import point_box_src from '../../assets/img/rewardZone/gem_home.svg';
import trophy_src from '../../assets/img/rewardZone/trophy_home.svg';
import rank_src from '../../assets/img/rewardZone/Rank__home.svg';
import rupee_src from '../../assets/img/rewardZone/rupee_home.svg';
// import { GlobalModal } from "./global";

export default function Back(props) {
    const [open, setOpen] = React.useState(false);
    
    function bactToRewardFn() {
        if(props.parentProps && props.parentProps.history) {
            if(props.parentProps.history.location.pathname !== '/rewardzone') {
                props.parentProps.history.push('/rewardzone');
            }
        }
    }

    function closeAppFn() {
        setOpen(true);
    }

    function exitApp() {
        props.parentProps.history.push('/');
    }

    return (
        // default back container height will be 128px
        <>
        <div id="back-container" className="" style={{height: `${props.height}px`}}>
            <div className="back-container-content" >
                <i className="arrow left ml-4" onClick={() => bactToRewardFn()} ></i>
                <span className="back-header">{props.backTitle ? props.backTitle : `Back to Reward Zone`}</span>
                <AiOutlineClose className="close-box mr-2" onClick={() => closeAppFn()} />
                <BsFillBellFill className="notification-box mr-2" ></BsFillBellFill>
                <span className="notification-count">6</span>
                {/* <div className="notification-box">
                    <span className="notification-count">6</span>
                    <div className="notification-bell">
                        <span className="bell-top"></span>
                        <span className="bell-middle"></span>
                        <span className="bell-bottom"></span>
                        <span className="bell-rad"></span>
                    </div>
                </div> */}
                {props.fromReward ? (
                    <div id="reward-zone-detail-box-container">
                        <div id="point-box" className="detail-box-content mb-3" onClick={() => props.pointsOpenFn()}>
                            <img className="float-left" src={point_box_src} />
                            <div className="float-left pl-2">
                                <div className="rzdb-header" >2102</div>
                                <div className="rzdb-desc" >Points</div>
                            </div>
                        </div>
                        <div id="amount-saved-box" className="detail-box-content mb-3 float-right">
                            <img className="float-left" src={rupee_src} />
                            <div className="float-left pl-2">
                                <div className="rzdb-header" >$3234</div>
                                <div className="rzdb-desc" >Amount Saved</div>
                            </div>
                        </div>
                        <div id="rewards-box" className="detail-box-content" onClick={() => props.rewardOpenFn()}>
                            <img className="float-left" src={trophy_src} />
                            <div className="float-left pl-2">
                                <div className="rzdb-header">3</div>
                                <div className="rzdb-desc" >Rewards</div>
                            </div>
                        </div>
                        <div id="rank-box" className="detail-box-content float-right" onClick={() => props.rankingOpenFn()}>
                            <img className="float-left" src={rank_src} />
                            <div className="float-left pl-2">
                                <div className="rzdb-header" >12</div>
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
