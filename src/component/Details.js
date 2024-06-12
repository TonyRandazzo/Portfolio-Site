import React, { useEffect } from 'react';

function Details() {

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    element.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='fade-in description left'>
                <h2 className='fade-in title'>EDUCATION</h2>
                <p className='fade-in paragraph'>I'm self taught in game development; learned mostly through Youtube and Udemy in this field since 2020 but more as a hobby. As far as is web development concerned, I started in 2023 firslty with courses in Udemy, than I attended a Full Stack Developer course with a final exam wich gave me these certifications:</p>
                <ul className='fade-in paragraph'>
                    <li>PHP Developer Fundamentals on MySQL Environment</li>
                    <li>JavaScript Coding Specialist (Knowledge Pillars)</li>
                    <li>Web Development Essentials (Linux Professional Institute)</li>
                </ul>
            </div>
            <div className='fade-in description right'>
                <h2 className='fade-in title'>EXPERIENCE</h2>
                <p className='fade-in paragraph'>I have worked 3 months in a debt-recover company as a backend developer in a Web Environment and I worked mostly with Javascript and NodeJS and I also have 3 months (and ongoing) experience as a mobile game developer for Booblis Entertainment in which I am also co-founder.</p>
            </div>
            <div className='fade-in description left'>
                <h2 className='fade-in title'>SKILLS</h2>
                <ul className='fade-in paragraph'>
                    <li>Web Development</li>
                    <li>CMS</li>
                    <li>Software Development</li>
                    <li>Game Development</li>
                </ul>
                <p className='fade-in paragraph'> Below, some of my projects.</p>
            </div>
        </>
    );
}

export default Details;
