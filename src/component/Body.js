import React from 'react';
import portfolio from './Immagini/portfolio.png'
import dinolympics from './Immagini/dinolympics.png'
import voicemail from './Immagini/voicemail.png'


function Body() {
  const items = [
    { id: 1, src: 'https://cdn.dribbble.com/users/5126936/screenshots/11401680/web_1920___2.png', text: 'This is a study about rooms for chats using Socket.io, NodeJS and PHPMyAdmin. Unfortunately, to see the project, you have to download it from GitHub and open with Docker', link: 'https://github.com/TonyRandazzo/Socket-Chat.git' },
    { id: 2, src: voicemail, text: 'This is a voicemail recognizer I made with a collegue using HTML, CSS and JavaScript for a company of debts recovery. It needs a server to work, so you have to download it and open with Live Server the html file', link: 'https://github.com/TonyRandazzo/voicemail-catcher-developer.git' },
    { id: 3, src: portfolio, text: 'This is this same portfolio made with React', link: 'https://tonyrandazzo.github.io/Portfolio-Site/' },
    { id: 4, src: 'https://cdnb.artstation.com/p/assets/images/images/003/679/809/large/jonathan-hart-vietnam-war-winston-churchill.jpg?1476352912', text: 'This was my first work done with HTML and CSS after a course with Udemy. In this project, we had to talk about the Vietnam War focusing on more social aspects and every member of the group had to focus on a particular subject. I did the website and the introduction to this project.', link: 'https://tonyrandazzo.github.io/VietnamWar---Lavoro-CLIL-main/' },
    { id: 5, src: 'https://m.media-amazon.com/images/I/61BRwWBPKfL.png', text: 'This one is a game in which the computer picks a number and you have to guess the number from 0 to 20 and is made with plain HTML, CSS and Javascript', link: 'https://tonyrandazzo.github.io/Guess-The-Number/' },
    { id: 6, src: 'https://thumbs.dreamstime.com/b/people-group-eating-fast-food-burgers-sitting-wooden-table-cafe-friends-meeting-communication-77588403.jpg', text: 'This is a study about cart system wwith frontend using React', link: 'https://tonyrandazzo.github.io/ShopCartDemo/' },

  ];

  const items2 = [
  ];

  const items3 = [
    { id: 1, src: dinolympics, text: 'This was the project that I brought to the final exam to Infobasic that has frontend made with React and backend with Laravel. That is a simple game in wich the player has to do some minigames, he can buy skins, have records and do missions. I dockerized the project, you can see it by downloading from this Github link', link: 'https://github.com/TonyRandazzo/Dinolympics-docker.git' },
    { id: 2, src: 'https://www.videogamer.com/wp-content/uploads/Itch-io_logo.jpg', text: 'This is my Itch.io in which there are some games that I am working on.', link: 'https://big-studio.itch.io/' },
  ];
  return (
    <div className='projects'>
      <h1>WEB DEVELOPMENT</h1>
      <div className="container">
        {items.map(item => (
          <a href={item.link || '#'} target='_blank' key={item.id} className="item">
            <img src={item.src} alt={`Image ${item.id}`} />
            <div className="overlay">{item.text}</div>
          </a>
        ))}
      </div>
      {/* <h1>WORDPRESS</h1>
    <div className="container">
      {items2.map(item => (
        <a href={item.link || '#'} target='_blank' key={item.id} className="item">
          <img src={item.src} alt={`Image ${item.id}`} />
          <div className="overlay">{item.text}</div>
        </a>
      ))}
    </div> */}
      <h1>GAME DEVELOPMENT</h1>
      <div className="container">
        {items3.map(item => (
          <a href={item.link || '#'} target='_blank' key={item.id} className="item">
            <img src={item.src} alt={`Image ${item.id}`} />
            <div className="overlay">{item.text}</div>
          </a>
        ))}
      </div>
    </div>

  );
}

export default Body;
