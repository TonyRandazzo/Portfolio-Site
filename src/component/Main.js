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
            <a href='https://github.com/TonyRandazzo' target='_blank'><img className='foto' src={immagine} alt='Portfolio' /></a>
            <h2>ABOUT ME</h2>
            <p>I'm a 19 years old very passionate developer. I'm willing to always improve myself and learn new things. Click on the photo to see my GitHub.</p>
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
