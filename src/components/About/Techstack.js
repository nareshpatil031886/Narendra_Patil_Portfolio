import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import { DiJavascript1, DiReact, DiNodejs, DiDjango, DiPython, DiGit, DiMysql, DiAws } from 'react-icons/di'
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiBootstrap,
  SiRedux,
  SiIonic,
  SiAdonisjs,
  SiExpress,
  SiPostman,
  SiNetlify,
} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiAdonisjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVuedotjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiAngular />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiAws />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiIonic />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNetlify />
      </Col>
    </Row>
  )
}

export default Techstack
