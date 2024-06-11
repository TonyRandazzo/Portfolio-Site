import React from 'react';

function Body() {
  const items = [
    { id: 1, src: 'https://okdiario.com/img/2020/02/26/series-netflix-top-10-1-1.jpg', text: 'Testo 1' },
    { id: 2, src: 'https://okdiario.com/img/2020/02/26/series-netflix-top-10-1-1.jpg', text: 'Testo 2' },
    { id: 3, src: 'https://okdiario.com/img/2020/02/26/series-netflix-top-10-1-1.jpg', text: 'Testo 3' },
  ];

  return (
    <div className='projects'>
    <h1>WEB DEVELOPER</h1>
        <div className="container">
      {items.map(item => (
        <a href="#" key={item.id} className="item">
          <img src={item.src} alt={`Image ${item.id}`} />
          <div className="overlay">{item.text}</div>
        </a>
      ))}
    </div>
    <h1>WORDPRESS</h1>
    <div className="container">
      {items.map(item => (
        <a href="#" key={item.id} className="item">
          <img src={item.src} alt={`Image ${item.id}`} />
          <div className="overlay">{item.text}</div>
        </a>
      ))}
    </div>
    <h1>GAME DEVELOPER</h1>
    <div className="container">
      {items.map(item => (
        <a href="#" key={item.id} className="item">
          <img src={item.src} alt={`Image ${item.id}`} />
          <div className="overlay">{item.text}</div>
        </a>
      ))}
    </div>
    </div>

  );
}

export default Body;
