import React, { useEffect, useState, useRef } from 'react';
import Lane from '../Lane/Lane';
import { v4 } from 'uuid';

import s from './Slider.module.scss';
import { useOnScreen } from '../../utils';


const Slider = ({
    data = []
}) => {
    const [visible, setRef] = useOnScreen({
        threshold: .5
    });
    const cardRef = useRef(null);
    const [cardKey, setCardKey] = useState();
    const [curr, setCurr] = useState(0);
    const [info, setInfo] = useState(data[0]);
    
    useEffect(() => {
        setInfo(data[curr]);
        setCardKey(v4());
    }, [curr]);

    useEffect(() => {
        let interval;
        if(visible){
            interval = setInterval(() => {
                setCurr(prevCurr => prevCurr === data.length - 1 ? 0 : prevCurr + 1);
            }, 1500);
        }else{
            clearInterval(interval);
        };
        return () => clearInterval(interval);
    }, [visible]);
    
    return <div ref={setRef} className={s.main}>
        <Lane 
            elements={data.length}
            currentIndex={curr}
            onItemClick={setCurr}    
        />
        <div key={cardKey} className={s.main_card}>
            <div className={s.main_card_image}>
                <img 
                    alt={info.title}
                    src={info.image}
                    className={s.main_card_image_img}
                />
            </div>
            <div className={s.main_card_about}>
                <span className={s.main_card_about_title}>{info.title}</span>
                <span className={s.main_card_about_des}>{info.description}</span>
                {info.list ? <ol className={s.main_card_about_list}>
                    {info.list.map((el, ind) => <li className={s.main_card_about_list_item} key={el}>{el}</li>)}
                </ol> : <></>}
            </div>
        </div>
    </div>
};


export default Slider;