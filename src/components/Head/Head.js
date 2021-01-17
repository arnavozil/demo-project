import React from 'react';
import logo from '../../assets/logo.jpg'
import logoMobile from '../../assets/logo-mobile.jpg'
import { CgMouse } from 'react-icons/cg';

import s from './Head.module.scss';

const Head = () => {

    return <header className={s.main}>
        <div className={s.main_button}>Contact</div>
        <img 
            className={[s.main_logo, s.desktop].join(' ')} 
            alt='Blissway'
            src={logo}
        />
        <img 
            className={[s.main_logo, s.mobile].join(' ')}
            alt='Blissway'
            src={logoMobile}
        />
        <section className={s.main_mouse}>
            <CgMouse className={s.main_mouse_logo} />
            <span className={s.main_mouse_text}>scroll down</span>
            <span className={s.main_mouse_subtext}>to learn more</span>
        </section>
    </header>
};

export default Head;