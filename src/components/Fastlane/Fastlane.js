import React, { useEffect } from 'react';
import laneVideo from '../../assets/fastlane.mp4';
import lines from '../../assets/fastlanes_line.svg';
import bigB from '../../assets/bigB.svg';
import verticalLine from '../../assets/vertical_line.svg';
import mobileTopLine from '../../assets/mobile_top_fast_lane.svg';
import mobileLeftLine from '../../assets/mobile_left_fastlane.svg';

import { useOnScreen } from '../../utils';
import s from './Fastlane.module.scss';

const Fastlane = () => {

    const [visible, setRef, ref] = useOnScreen({
        threshold: .5
    });
    useEffect(() => {
        if(visible){
            console.log(ref)
            ref?.play();
        }else{
            ref?.pause();
        }
    }, [visible]);

    return <section className={s.main}>
        <div className={s.main_video}>
            <div className={s.main_video_textBox}>
                <span className={s.main_video_textBox_main}>Fast lanes,</span>
                <span className={s.main_video_textBox_sub}>implemented within months on any highway, anywhere</span>
            </div>
            <img 
                className={[s.main_video_topLine, s.mobile].join(' ')}
                src={mobileTopLine}
                alt=''
            />
            <img 
                className={[s.main_video_lines, s.desktop].join(' ')}
                alt=''
                src={lines}
            />
            <img 
                className={[s.main_video_bigB, s.desktop].join(' ')}
                alt=''
                src={bigB}
            />
            <img 
                className={[s.main_video_leftLine, s.mobile].join(' ')}
                src={mobileLeftLine}
                alt=''
            />
            <video 
                ref={setRef}
                loop
                className={s.main_video_vid}
                src={laneVideo} 
                type='video/mp4'
            />
            <img 
                className={[s.main_video_verticalLine, s.desktop].join(' ')}
                alt=''
                src={verticalLine}
            />
        </div>
    </section>
};

export default Fastlane