import { useState, useEffect } from 'react';
export const createListener = () => {
    // listener for pushstate
    history.pushState = (func => function pushState(){
        const val = func.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return val;
    })(history.pushState);

    // listener for replacestate
    history.replaceState = (func => function replaceState(){
        const val = func.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return val;
    })(history.replaceState);
}

// hook that binds intersection observer
export const useOnScreen = options => {
      
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if(ref){
            observer.observe(ref);
        };

        return () => {
            if(ref){
                observer.unobserve(ref);
            }
        }
    }, [options, ref]);

    return [visible, setRef, ref];
};
