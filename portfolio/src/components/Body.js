import React, {useState } from 'react';
import Logo from './Immagini/logo2.png';
import Portfolio from './Immagini/controller.png'
import Card from 'react-bootstrap/Card';
function Body() {
  const [expandedButton, setExpandedButton] = useState(null);

  const handleClick = (event) => {
    const clickedButton = event.currentTarget;
  
    if (clickedButton === expandedButton) {

      clickedButton.parentNode.classList.remove("custom-button-expanded");
      setExpandedButton(null);
    } else {
      if (expandedButton) {
        expandedButton.parentNode.classList.remove("custom-button-expanded");
      }
  

      clickedButton.parentNode.classList.add("custom-button-expanded");
      setExpandedButton(clickedButton);
    }
  };

  return (
    <div className='elements'>
      <ul>
        <li>
          <h1 id="Front-End" className="animated-h1">Front-End </h1>
          <p>About the Front-End, as far as HTML and CSS are concerned, I am mostly self-taught via Youtube, Udemy, and practice. Then, I attended a Full Stack Developer Course in which I learned JavaScript and the DOM. I know some libraries such as Bootstrap and Tailwind.</p>
          <button onClick={handleClick} className='custom-button'><span></span>View Projects</button>
          <div className='Projects'>
            <p className="description">These are some projects that I made using HTML, CSS, and JavaScript.</p>
          </div>
          <div className='cards'>
          <Card style={{ width: '18rem' }}>
            <a href='#' target="_blank"><Card.Img variant="top"  src={Portfolio} /></a>
            <Card.Body>
              <Card.Title>This Portfolio</Card.Title>
              <Card.Text>
              This is the portfolio you're watching right now. I did this portfolio after almost a year of studying HTML and CSS on my own. This portfolio is made with React JS and a bit of Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <a href='https://tonyrandazzo.github.io/VietnamWar---Lavoro-CLIL-main/' target='_blank'><Card.Img variant="top" src="https://m.media-amazon.com/images/I/61VaxmPIrGL._AC_UF1000,1000_QL80_.jpg" /></a>
            <Card.Body>
              <Card.Title>Vietnam War Highschool Project</Card.Title>
              <Card.Text>
              This was my first work done with HTML and CSS. In this project, we had to talk about the Vietnam War focusing on more social aspects and every member of the group had to focus on a particular subject. I did the website and the introduction to this project.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <a href='https://tonyrandazzo.github.io/Guess-The-Number/' target='_blank'><Card.Img variant="top" src="https://m.media-amazon.com/images/I/61BRwWBPKfL.png" /></a>
            <Card.Body>
              <Card.Title>Simple Game Guess The Number</Card.Title>
              <Card.Text>
              This one is a game in which the computer picks a number and you have to guess the number from 0 to 20 and is made with plain HTML, CSS and Javascript
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <h3>HTML</h3>
          <div className="html-bar">
            <div className="html">80%</div>
          </div>
          <h3>CSS</h3>
          <div className="css-bar">
            <div className="css">70%</div>
          </div>
          <h3>JavaScript/React JS</h3>
          <div className="js-bar">
            <div className="js">80%</div>
          </div>
        </li>


        <li>
          <h1 id="Back-End" className="animated-h1">Back-End </h1>
          <p>I learned the Back-End in a Full Stack Developer Course at Infobasic. I know how to use PHP and MySql, especially to organize a management.</p>
          <button onClick={handleClick} className='custom-button'><span></span>View Projects</button>
          <div className='Projects'>
            <p className="description">This is a project I made using plain PHP.</p>
            <div className='cards'>
          <Card style={{ width: '18rem' }}>
            <a href='https://tonyrandazzo.github.io/Business-Management-Form/' target='_blank'><Card.Img variant="top" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" /></a>
            <Card.Body>
              <Card.Title>Simple Management Form</Card.Title>
              <Card.Text>
              This is the GitHub of a PHP project on which I'm working. It's a simple Business Management form where you put something (like a username) and it will be saved in an SQL file.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          </div>
          <h3>PHP/Laravel</h3>
          <div className="php-bar">
            <div className="php">60%</div>
          </div>
          <h3>MySQL/PostgreSQL</h3>
          <div className="mySQL-bar">
            <div className="mySQL">60%</div>
          </div>
        </li>

        <li>
          <h1 id="Game-Dev" className="animated-h1">Game Dev </h1>
          <p>I'm self-taught in this field. I practiced on Unreal Engine, Construct 2, Godot Engine, and RPG Maker almost five years ago for at least two years. Right now, I mostly use Godot Engine and I have been using this Engine for like six years. I publish games as Big Studio.</p>
          <button onClick={handleClick} className='custom-button'><span></span>View Projects</button>
          <div className='Projects'>
            <p className="description">These are projects I made using Godot Engine.</p>
            <div className='cards'>
          <Card style={{ width: '18rem' }}>
            <a href='https://big-studio.itch.io/' target='_blank'><Card.Img variant="top" src="https://static-00.iconduck.com/assets.00/itch-io-icon-2048x2048-i6hzclad.png" /></a>
            <Card.Body>
              <Card.Title>Itch.io</Card.Title>
              <Card.Text>
              Here there are some of the games I'm working on. Take a look if you're interested.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          </div>
          <h3>Godot Engine 2D</h3>
          <div className="Godot-bar">
            <div className="Godot">90%</div>
          </div>
          <h3>Unreal Engine</h3>
          <div className="UE-bar">
            <div className="UE">50%</div>
          </div>
          <h3>Blender</h3>
          <div className="Blender-bar">
            <div className="Blender">40%</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Body;

