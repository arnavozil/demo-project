import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { useOnScreen } from '../../utils';
import Card from '../Card/Card';
import Image from '../Image/Image';

import s from './Frame.module.scss';

const Frame = ({
    data = []
}) => {
    const [visible, setRef] = useOnScreen({
        threshold: .5
    });
    const [cardKey, setCardKey] = useState(v4());
    const [imageKey, setImageKey] = useState(v4());
    const [curr, setCurr] = useState(0);
    
    useEffect(() => {
        setImageKey(v4());
        setCardKey(v4());
    }, [curr]);
    
    useEffect(() => {
        let interval;
        if(visible){
            interval = setInterval(() => {
                setCurr(prevCurr => prevCurr === data.length - 1 ? 0 : prevCurr + 1);
            }, 2000);
        }else{
            clearInterval(interval);
        };
        return () => clearInterval(interval);
    }, [visible]);
    
    return <section ref={setRef} className={s.main}>
        <Image imageKey={imageKey} source={data[curr].image} />
        <Card 
            onItemClick={setCurr}
            elements={3}
            cardKey={cardKey}
            title={data[curr].title}
            list={data[curr].list}
            currentIndex={curr}
        />
    </section>
};

export default Frame;