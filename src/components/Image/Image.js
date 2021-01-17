import React from 'react';

import s from './Image.module.scss';

const Image = ({
    source,
    altText = '',
    imageKey = '',
}) => {
    return <img 
        alt={altText}
        src={source}
        key={imageKey}
        className={s.main}
    />
};

export default Image;