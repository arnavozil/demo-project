import React, { useEffect, useLayoutEffect, useState } from 'react';
import s from './Lane.module.scss';

const Lane = ({
    currentIndex = 0,
    elements = 4,
    onItemClick = () => {},
    className = ''
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [height, setHeight] = useState(100 / elements);

    useLayoutEffect(() => setIsMobile(window.innerWidth <= 900), [window.innerWidth]);
    useEffect(() => setHeight(100 / elements), [elements]);
    return <div className={[s.lane, className].join(' ')}>
        {Array(elements).fill(null).map((el, ind) => <div 
            key={ind}
            onClick={() => onItemClick(ind)} 
            style={!isMobile ? {height: `${height}%`} : { width: `${height}%`}}
            className={s.lane_item}
        >
            {ind+1}
        </div>)}
        <span 
            style={!isMobile ?
                {top: `${currentIndex * (height)}%`, height: `${height}%`} : 
                {left: `${currentIndex * (height)}%`, width: `${height}%`}}
            className={s.lane_top}
        >
            {currentIndex + 1}
        </span>
    </div>
};

export default Lane;
