import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaUsers, FaRocket, FaLaptopCode, FaGlobeAsia } from 'react-icons/fa'

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            👋 Hi Everyone, I am <span className='purple'>Narendra Patil</span> from
            <span className='purple'> India 🇮🇳</span>.
            <br />
            💻 I am currently working as a <b className='purple'>Full Stack Developer</b> at Webledger.
            <br />
            🎓 I hold a <b className='purple'>B.Tech in Data Science</b> from R. C. Patel Institute Of Technology, Shirpur.
            <br />
            <br />
            🚀 Apart from coding, I love to:
          </p>
          <ul>
            <li className='about-activity'>
              🎮 <ImPointRight /> Playing Video Games
            </li>
            <li className='about-activity'>
              ✍️ <ImPointRight /> Writing Tech Blogs
            </li>
            <li className='about-activity'>
              ✈️ <ImPointRight /> Traveling & Exploring New Places
            </li>
          </ul>

          <br />
          <p style={{ color: 'rgb(155 126 172)', fontSize: '1.2em' }}>"Strive to build things that make a difference!" 🚀✨</p>
          <footer className='blockquote-footer'>Narendra Patil</footer>
          <br />

          {/* Visitor Counter Section */}
          <div className='visitor-counter'>
            <FaUsers size={22} color='purple' />
            <span style={{ marginLeft: '8px', fontSize: '1.2em', color: '#fff' }}>
              <b className='purple'>1000+</b> Visitors Have Explored This Portfolio! 🌍
            </span>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard;
