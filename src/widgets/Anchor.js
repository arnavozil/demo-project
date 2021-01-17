import React from 'react';

const Anchor = ({
    goto,
    children,
    ...props
}) => {

    const handleClick = () => {
        if(typeof goto === 'string' && goto[0] === '/'){
            history.pushState({}, '', goto);
        }else if(typeof goto === 'function'){
            const { path = '', hash = '' } = goto();
            history.pushState({}, '', path+hash);
        };
    };
    return <button onClick={handleClick} {...props}>
        {children}
    </button>
}

export default Anchor;