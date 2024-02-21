import React from 'react';
import VideoFile from './Immagini/sfondo1.mp4';


const Main = () => {
  return (
    <div>
      <video id="video-background" autoPlay muted loop>
        <source src={VideoFile} type="video/mp4" />
      </video>
      <div className="front-row">
        <h1 className="titolo">Tony Randazzo Portfolio</h1>
        <img src="Immagini/controller.png" alt="" className="logo" />
        <div className="progress-bar-container">
          <div className="progress-bars-container">
            <div className="progress-bar FrontEnd">
              <h2>
                <label htmlFor="FrontEnd">
                  <a href="#Front-End">Front-End</a>
                </label>
              </h2>
              <progress id="FrontEnd" min="0" max="100" value="80"></progress>
            </div>
            <div className="progress-bar BackEnd">
              <h2>
                <label htmlFor="BackEnd">
                  <a href="#Back-End">Back-End</a>
                </label>
              </h2>
              <progress id="BackEnd" min="0" max="100" value="60"></progress>
            </div>
            <div className="progress-bar GameDev">
              <h2>
                <label htmlFor="GameDev">
                  <a href="#Game-Dev">GameDev</a>
                </label>
              </h2>
              <progress id="GameDev" min="0" max="100" value="80"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;