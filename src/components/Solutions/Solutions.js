import React from 'react';
import breakVertical from '../../assets/mobile_next_generation_down.svg';
import shortDown from '../../assets/short_down.svg';
import { FRAMES_DATA } from '../../strings';
import Frame from '../Frame/Frame';

import s from './Solutions.module.scss';

const Solutions = () => {
    return <section className={s.main}>
        <div className={s.main_textBox}>
            <span className={s.main_textBox_main}>
                Blissway
            </span>
            <span className={s.main_textBox_sub}>
                builds next-generation tolling solutions for cities
            </span>
            <span className={s.main_textBox_last}>
                from software-heavy, hardware-lite roadside infrastructure to contract-free public-private partnerships
            </span>
        </div>
        <img 
            className={[s.main_breakImg, s.mobile].join(' ')}
            src={breakVertical}
            alt=''
        />
        <img 
            className={[s.main_img, s.desktop].join(" ")}
            src={shortDown}
            alt=''
        />
        <Frame data={FRAMES_DATA} />
    </section>
};

export default Solutions;