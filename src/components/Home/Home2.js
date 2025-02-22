import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF 🤝
            </h1>
            <p className='home-about-body'>
              👋 Hey there! I'm a passionate <b className='purple'>Full Stack Developer</b> who loves crafting
              <b className='purple'> scalable applications</b> and solving complex problems.
              <br />
              <br />
              🚀 I specialize in <b className='purple'> JavaScript, TypeScript, Python</b>, and modern frameworks like
              <b className='purple'> React.js, Vue.js, Adonis.js, and Django.</b>
              <br />
              <br />
              🔧 My experience includes:
              <ul>
                <li>
                  ⚡ Automating <b className='purple'>GST filing systems</b> at Webledger.
                </li>
                <li>
                  🔗 Developing high-performance <b className='purple'>REST APIs</b> & cloud-based solutions.
                </li>
                <li>
                  🔐 Implementing <b className='purple'>SSO authentication</b> to enhance security.
                </li>
              </ul>
              <br />
              🧠 I’m deeply interested in <b className='purple'>AI & ML</b> and have built:
              <ul>
                <li>
                  📄 An <b className='purple'>AI-powered text summarizer</b> using OpenAI GPT-3.
                </li>
                <li>
                  📊 A <b className='purple'>real-time crypto tracker</b> with market insights.
                </li>
              </ul>
              <br />
              🎯 Always eager to <b className='purple'> innovate & optimize</b>, I thrive in fast-paced environments and love turning ideas into
              reality. Let’s build something amazing together! 🚀✨
            </p>
          </Col>

          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a href='https://github.com/nareshpatil031886' target='_blank' rel='noreferrer' className='icon-colour  home-social-icons'>
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a href='https://x.com/Narendr85143089' target='_blank' rel='noreferrer' className='icon-colour  home-social-icons'>
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/narendra-patil-0a8963230/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2;
