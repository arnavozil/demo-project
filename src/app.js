import React, { useEffect } from 'react';
import Fastlane from './components/Fastlane/Fastlane';
import Features from './components/Features/Features';
import Head from './components/Head/Head';
import Solutions from './components/Solutions/Solutions';

const App = () => {

    useEffect(() => {
    }, []);
    return <>
        <Head />
        <Fastlane />
        <Features />
        <Solutions />
    </>
};

export default App;