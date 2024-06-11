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
            <img className='foto' src={immagine} alt='Portfolio' />
            <div className='col'>
              <p className='bouncing-text'>GAME DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main;
