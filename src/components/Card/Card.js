import React from 'react';
import Lane from '../Lane/Lane';

import s from './Card.module.scss';

const Card = ({
    title = '',
    list = [],
    cardKey = '',
    ...props
}) => {

    return <section key={cardKey} className={s.main}>
        <h3 className={s.main_title}>{title}</h3>
        <ul className={s.main_list}>
            {list.map(el => <li className={s.main_list_item} key={el}>{el}</li>)}
        </ul>
        <Lane className={s.main_lane} {...props} />
    </section>
};

export default Card;