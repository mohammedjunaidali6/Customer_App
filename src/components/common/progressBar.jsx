import React from 'react';

export default function ProgressBar(props) {

    return (
        <div className="progress-bar animate">
            <span style={{ width: `${props.percentage}%` }}><span></span></span>
        </div >
    )
}
