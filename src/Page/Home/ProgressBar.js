import React,{ useEffect, useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
    const [offset, setOffset] = useState(1);
    const circleRef = useRef(null);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    

    useEffect(() => {
        const progressOffset = ((progress - 100) / 100) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 2500ms ease-in-out;';
    }, [setOffset, circumference, progress, offset]);

    return (
        <>
            <svg className="svg" width={size} height={size}>
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                   
                />
                <circle
                    className="svg-circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    ref={circleRef}
                    strokeDashoffset={offset}
                />
                <text className="svg-circle-text" x={center + 3} y={center + 5}>
                    {progress}%
    </text>
            </svg>
        </>
    )
}

ProgressBar.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired
}

export default memo(ProgressBar);