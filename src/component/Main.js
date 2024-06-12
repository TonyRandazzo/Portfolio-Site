import React from 'react';
import immagine from './Immagini/definitivo.jpeg';


function Main() {
    return (
        <div>
        <div className='landingPage'>
          <h1 className='titolo'>PORTFOLIO</h1>
          <div className='content'>
            <div className='col'>
              <p className='animated-text'>FULL STACK DEVELOPER</p>
            </div>
            <div className='aboutMe'>
            <img className='foto' src={immagine} alt='Portfolio' />
            <h2>ABOUT ME</h2>
            <p>I'm a 19 years old very passionate developer. I'm willing to always improve myself and learn new things.</p>
            </div>
            <div className='col'>
              <p className='bouncing-text'>GAME DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main;
