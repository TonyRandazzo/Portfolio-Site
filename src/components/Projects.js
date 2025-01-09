import React, { useState, useRef } from 'react';
import FartClicker from '../videos/Fart Clicker.mp4'
import SocketChat from '../videos/Socket Chat.mp4'
import VoicemailCatcher from '../videos/Voicemail Catcher.mp4'
import Github from '../videos/Github.mp4'
import Itch from '../videos/Itch.mp4'
import Portfolio from '../videos/Portfolio.mp4'

import CV from '../documents/Curriculum.pdf';
import CVEng from '../documents/Curriculum Eng.pdf';

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4, setIsLoading4] = useState(false);
  const [isLoading5, setIsLoading5] = useState(false);
  const [isLoading6, setIsLoading6] = useState(false);


  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);


  const rectangles = [
    { className: 'rectangle-3', delay: '7s' },
    { className: 'rectangle-4', delay: '8s' },
    { className: 'rectangle-5', delay: '9s' },
    { className: 'rectangle-1', delay: '0s' },
    { className: 'rectangle-2', delay: '1s' },
    { className: 'rectangle-3', delay: '2s' },
    { className: 'rectangle-4', delay: '3s' },
    { className: 'rectangle-5', delay: '4s' },
    { className: 'rectangle-1', delay: '5s' },
    { className: 'rectangle-2', delay: '6s' },
    { className: 'rectangle-4', delay: '3s' },
    { className: 'rectangle-5', delay: '4s' },
    { className: 'rectangle-1', delay: '5s' },
    { className: 'rectangle-5', delay: '4s' },
    { className: 'rectangle-1', delay: '5s' },
    { className: 'rectangle-2', delay: '6s' },
    { className: 'rectangle-4', delay: '3s' },
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsLoading(true)
    const video = videoRef.current;
    if (video && video.paused) {
      setTimeout(() => {
        video.play()
          .then(() => setIsLoading(false))
          .catch((err) => {
            console.error('Play interrupted:', err);
            setIsLoading(false);
          });
      }, 1000);
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsLoading(false)
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0; 
    }
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
    setIsLoading2(true)
    const video = videoRef2.current;
    if (video && video.paused) {
      setTimeout(() => {
        video.play()
          .then(() => setIsLoading2(false))
          .catch((err) => {
            console.error('Play interrupted:', err);
            setIsLoading2(false);
          });
      }, 1000);
    }
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
    setIsLoading2(false)

    const video = videoRef2.current;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0; 
    }
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
    setIsLoading3(true)
    const video = videoRef3.current;
    if (video && video.paused) {
      setTimeout(() => {
        video.play()
          .then(() => setIsLoading3(false))
          .catch((err) => {
            console.error('Play interrupted:', err);
            setIsLoading3(false);
          });
      }, 1000);
    }
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
    setIsLoading3(false)

    const video = videoRef3.current;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0; 
    }
  };

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
    setIsLoading4(true)
    const video = videoRef4.current;
    if (video && video.paused) {
      setTimeout(() => {
        video.play()
          .then(() => setIsLoading4(false))
          .catch((err) => {
            console.error('Play interrupted:', err);
            setIsLoading4(false);
          });
      }, 1000);
    }
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
    setIsLoading4(false)

    const video = videoRef4.current;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
    setIsLoading5(true)
    const video = videoRef5.current;
    if (video && video.paused) {
      setTimeout(() => {
        video.play()
          .then(() => setIsLoading5(false))
          .catch((err) => {
            console.error('Play interrupted:', err);
            setIsLoading5(false);
          });
      }, 1000);
    }
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
    setIsLoading5(false)

    const video = videoRef5.current;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0; 
    }
  };

  const handleMouseEnter6 = () => {
    setIsHovered6(true);
    setIsLoading6(true)
    const video = videoRef6.current;
    if (video && video.paused) {
      setTimeout(() => {
        video.play()
          .then(() => setIsLoading6(false))
          .catch((err) => {
            console.error('Play interrupted:', err);
            setIsLoading5(false);
          });
      }, 1000);
    }
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
    setIsLoading6(false)

    const video = videoRef6.current;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0; 
    }
  };

  return (
    <section className="page third-page">
    <h1>Personal Projects</h1>
      <div className="rectangles-container">
        {rectangles.map((rect, index) => (
          <div
            key={index}
            className={`rectangle ${rect.className}`}
            style={{ animationDelay: rect.delay }}
          />
        ))}
      </div>
      <div>
        {rectangles.map((rect, index) => (
          <div
            key={index}
            className={`rectangle ${rect.className}`}
            style={{ animationDelay: rect.delay }}
          />
        ))}
      </div>
      <div className="rectangles-container2">
        {rectangles.map((rect, index) => (
          <div
            key={index}
            className={`rectangle ${rect.className}`}
            style={{ animationDelay: rect.delay }}
          />
        ))}
      </div>
      <div className='video-container'>

        <div
          className={`video-card ${isLoading ? 'loading' : ''}`}

          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project-title">Voicemail Catcher</div>
          <video
            ref={videoRef}
            className="video-background"
            loop
            muted
            playsInline
          >
            <source src={VoicemailCatcher} type="video/mp4" />
          </video>
          <div className={`description ${isHovered ? 'visible' : ''}`}>

            <p>A web applicative made with <strong>HTML, CSS and Javascript</strong> that I did with a collegue during my stage for Team Company. Given an input audio on real time, it says if it's a Voicemail or not.</p>
          </div>
          </div>
        <div
          className={`video-card ${isLoading2 ? 'loading' : ''}`}

          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <div className="project-title">Socket Chat</div>
          <video
            ref={videoRef2}
            className="video-background"
            loop
            muted
            playsInline
          >
            <source src={SocketChat} type="video/mp4" />
          </video>

          <div className={`description ${isHovered2 ? 'visible' : ''}`}>

            <p>A web applicative made with HTML, CSS, Node JS and SQL database using Docker that I did with a collegue during my stage for Team Company. It's a chat platform in which the users register, login and chat with eachother</p>
          </div>

        </div>
        <div
          className={`video-card ${isLoading3 ? 'loading' : ''}`}

          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <div className="project-title">My Portfolio</div>
          <video
            ref={videoRef3}
            className="video-background"
            loop
            muted
            playsInline
          >
            <source src={Portfolio} type="video/mp4" />
          </video>

          <div className={`description ${isHovered3 ? 'visible' : ''}`}>

            <p>This Portfolio was made using React and CSS. I made both the development and the design of this website.</p>
          </div>

        </div>
        <div
          className={`video-card ${isLoading4 ? 'loading' : ''}`}

          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        >
          <div className="project-title">Github</div>
          <video
            ref={videoRef4}
            className="video-background"
            loop
            muted
            playsInline
          >
            <source src={Github} type="video/mp4" />
          </video>

          <div className={`description ${isHovered4 ? 'visible' : ''}`}>

            <p>There are more studies and projects on my <a href='https://github.com/TonyRandazzo' target="_blank">Github</a></p>
          </div>

        </div>
        <div
          className={`video-card ${isLoading5 ? 'loading' : ''}`}

          onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}
        >
          <div className="project-title">Fart Clicker</div>
          <video
            ref={videoRef5}
            className="video-background"
            loop
            muted
            playsInline
          >
            <source src={FartClicker} type="video/mp4" />
          </video>

          <div className={`description ${isHovered5 ? 'visible' : ''}`}>
          <p> These are some clips of prototypes and defenitives features of the game I'm making with Booblis Entertainment. It's a mobile arcade game made with React Native, Node JS and SQL database to collect users data.</p>
          </div>

        </div>
        <div
          className={`video-card ${isLoading6 ? 'loading' : ''}`}

          onMouseEnter={handleMouseEnter6}
          onMouseLeave={handleMouseLeave6}
        >
          <div className="project-title">Project Title</div>
          <video
            ref={videoRef6}
            className="video-background"
            loop
            muted
            playsInline
          >
            <source src={Itch} type="video/mp4" />
          </video>

          <div className={`description ${isHovered6 ? 'visible' : ''}`}>

          <p>On <a href='https://tonyrandazzo.itch.io/' target="_blank">this page</a> I publish some of my game ideas and studies in Game Development mainly with Godot</p>
          </div>

        </div>
      </div>
      <div className="footer-bar2">
                <p>Email: randazzotony1@gmail.com</p>
                <p>Tel. Number: +39 329 393 6168</p>
                <p><a href={CV} target="_blank">
            Curriculum ITA
          </a> <a href={CVEng} target="_blank">
            Curriculum ENG
          </a></p>
            </div>
    </section>
  );
};

export default Projects;
