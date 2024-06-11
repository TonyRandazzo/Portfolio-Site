import React from 'react'
import CV from './Immagini/Curriculum.pdf';
import BDV from './Immagini/Business Card.png'

function Navbar() {
  return (
    <div className="custom-navbar">
    <nav>
      <ul>
        <li>
          <a href={CV} target="_blank">
            Curriculum
          </a>
        </li>
        <li>
          <a href={BDV} target="_blank">
            Business Card
          </a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar
