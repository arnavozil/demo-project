import React from 'react';
import mobileDown from '../../assets/mobile_down_why.svg';
import verticalContinue from '../../assets/vertical_continue.svg';
import rightVertical from '../../assets/right_vertical.svg';
import { FEATURES_DATA } from '../../strings';
import Slider from '../Slider/Slider';

import s from './Features.module.scss';

const Features = () => {
    return <section className={s.main}>
        <img 
            className={[s.main_vertical, s.desktop].join(' ')}
            src={verticalContinue}
            alt=''
        />
        <div className={s.main_header}>
            <span className={s.main_header_main}>
                Why most cities should develop fast lanes*
            </span>
            <span className={s.main_header_sub}>
                *a.k.a express lanes, HOT lanes, or managed lanes
            </span>
        </div>
        <div className={s.main_slideContainer}>
            <Slider data={FEATURES_DATA} />
        </div>
        <img 
            className={[s.main_rightVertical, s.desktop].join(' ')}
            src={rightVertical}
            alt=''
        />
        <img 
            className={[s.main_downVertical, s.mobile].join(' ')}
            src={mobileDown}
            alt=''
        />
    </section>
};

export default Features;