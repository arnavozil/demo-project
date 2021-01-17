import React, { useEffect, useState } from 'react';
import { createListener } from '../utils';

const Switch = ({
    children
}) => {

    const [selectedComponent, setSelectedComponent] = useState(<>This page is rendered beacause none of your components matched the url pathname and the 404 component is also missing</>);
    const [currentLocation, setCurrentLocation] = useState('/');
    useEffect(() => {
        createListener();
        const handleLocationChange = () => {
            const { hash, pathname } = location;
            const arrify = () => Array.isArray(children) ? children.slice() : [Object.assign({}, children)];
            const nodes = arrify();
            for(let i = 0; i < nodes.length; i++){
                const node = nodes[i];
                if(node.props.path === pathname || node.props.path === '*'){
                    setSelectedComponent(node);
                    break;
                };
            };
        }
        handleLocationChange();
        window.addEventListener('locationchange', handleLocationChange);
        return () => window.removeEventListener('locationchange', handleLocationChange);
    }, []);
    return selectedComponent;
};

export default Switch;