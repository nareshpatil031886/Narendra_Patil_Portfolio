import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import aiCourse from "../../Assets/Projects/aiCourse.png";
import cryptoHunter from "../../Assets/Projects/cryptoHunter.png";
import textSummarizer from "../../Assets/Projects/textSummarizer.png";
import movieMeter from "../../Assets/Projects/movieMeter.png";
import collegeWebsite from "../../Assets/Projects/collegeWebsite.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works</strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {/* AI Course Craft */}
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={aiCourse}
              isBlog={false}
              title='AI Course Craft'
              description='A Full Stack AI Course Generator built using AdonisJS, Vue.js, and Gemini API. Enables creation of 500+ personalized courses monthly with seamless authentication using Clerk.'
              ghLink='https://github.com/abhayfaldu/ai-course-craft'
              demoLink='https://ai-course-craft.vercel.app/'
            />
          </Col>

          {/* CryptoHunter */}
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={cryptoHunter}
              isBlog={false}
              title='CryptoHunter'
              description='A cryptocurrency tracker built with React.js, CoinGecko API, and Material UI. Provides real-time market data, price trends, and a personalized watchlist with Firebase authentication.'
              ghLink='https://github.com/nareshpatil031886/Crypto-Tracker'
              demoLink='https://crypto-hunter.netlify.app/'
            />
          </Col>

          {/* AI-Based Text Summarizer */}
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={textSummarizer}
              isBlog={false}
              title='AI-Based Text Summarizer'
              description='Developed an Article Summarizer using React and integrated OpenAI GPT-3 API, providing concise article summaries while showcasing skills in frontend, state management, and API integration.'
              ghLink='https://github.com/nareshpatil031886/AI-based-Article-Summarizer'
              demoLink='https://openaiarticalesummarizer.netlify.app/'
            />
          </Col>

          {/* Movie Meter Live */}
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={movieMeter}
              isBlog={false}
              title='Movie Meter Live'
              description='Created a user-friendly movie web app using React and the OMDB API, featuring search functionality, dynamic data retrieval, and responsive design for an intuitive and engaging user experience.'
              ghLink='https://github.com/nareshpatil031886/Movie_meter'
              demoLink='https://thapamovie.netlify.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={collegeWebsite}
              isBlog={false}
              title='Smart College Website'
              description='Developed a modern, responsive college website using HTML, CSS, and JavaScript. Showcases college details, events, and an interactive UI to enhance the student experience.'
              ghLink='https://github.com/nareshpatil031886/Smart-College'
              demoLink='https://rcpit.netlify.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}


export default Projects;
