import Spline from '@splinetool/react-spline';
import React, { useState, useEffect } from 'react';

const LandingPage = () => {
    return (
        <section className="page first-page">
            <Spline scene="https://prod.spline.design/SkHBt-ysgw6b8Qh1/scene.splinecode" className='robot' />
            <div className='container-title'>
                <h1 className="name animated-title">Tony Randazzo</h1>
                <div className="animated-text first-text">Full Stack Developer</div>
                <div className="animated-text second-text">Game Developer</div>
            </div>
            <div className="footer-bar">
                <p>Credits of 3D model to aximoris</p>
            </div>
        </section>
    );
};

export default LandingPage;