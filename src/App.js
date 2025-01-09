import './App.css';
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentPage < totalPages - 1) {
        setCurrentPage(prev => prev + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        setCurrentPage(prev => prev - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && currentPage < totalPages - 1) {
        e.preventDefault();
        setCurrentPage(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentPage > 0) {
        e.preventDefault();
        setCurrentPage(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="app-container">
      {/* Indicatore di pagina */}
      <div className="page-indicator">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentPage === index ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>

      <div 
        className="pages-container"
        style={{
          transform: `translateY(-${currentPage * 100}vh)`,
          transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000)'
        }}
      >
        <LandingPage />
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
};

export default App;