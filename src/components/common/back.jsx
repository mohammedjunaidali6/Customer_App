import React from 'react';

export default function Back(props) {

    return (
        <div id="back-container" className="">
            <div className="back-container-content" >
                <i className="arrow left ml-2"></i>
                <span className="back-header">Back to Reward Zone</span>
                <div class="notification-box">
                    <span class="notification-count">6</span>
                    <div class="notification-bell">
                        <span class="bell-top"></span>
                        <span class="bell-middle"></span>
                        <span class="bell-bottom"></span>
                        <span class="bell-rad"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
