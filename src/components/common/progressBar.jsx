import React from 'react';

export default function ProgressBar(props) {

    return (
        <div className="progress-bar animate" style={{ height: `${props.height ?? 7}px` }}>
            <span style={{ width: `${props.percentage}%` }}><span></span></span>
        </div>
    )
}
