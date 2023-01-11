import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import ToyotaTrips from '../images/ToyotaTrips.png';
import ClaimSafe from '../images/ClaimSafe.png';
import ReadyPetGo from '../images/ReadyPetGo.png';

const Projects = () => {
    //var width = window.innerWidth;
    //var height = window.innerHeight;
    //var route = process.env.PUBLIC_URL;
	return (
        <div className="Projects-header">
            <br/>
            <br/>
            <Container>
                <Row className='row-alternate'>
                    <Col lg={6} xl={7} className='m-10'>
                        <img alt="Manish" src={ToyotaTrips}/>
                    </Col>
                    <Col lg={4} xl={3} className='m-10 col-text'>
                        <h4>Project:</h4>
                        <h1 onClick={() => {
                            //window.location.href = 'https://www.google.com';
                        }}>Toyota Trips</h1>
                        <a href="/#/toyotatrips" style={{color: '#00AAFF'}}>Click here</a>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row className='row-alternate'>
                    <Col lg={6} xl={7} className='m-10'>
                        <img alt="Manish" src={ReadyPetGo}/>
                    </Col>
                    <Col lg={4} xl={3} className='m-10 col-text'>
                        <h4>Project:</h4>
                        <h1>Ready Pet Go</h1>
                        <a href="/#/readypetgo" style={{color: '#00AAFF'}}>Click here</a>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row className='row-alternate'>
                    <Col lg={6} xl={7} className='m-10'>
                        <img alt="Manish" src={ToyotaTrips}/>
                    </Col>
                    <Col lg={4} xl={3} className='m-10 col-text'>
                        <h4>Project:</h4>
                        <h1>Botsitive Zen</h1>
                        <a href="/#/readypetgo" style={{color: '#00AAFF'}}>Click here</a>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row className='row-alternate'>
                    <Col lg={6} xl={7} className='m-10'>
                        <img alt="Manish" src={ClaimSafe}/>
                    </Col>
                    <Col lg={4} xl={3} className='m-10 col-text'>
                        <h4>Project:</h4>
                        <h1>ClaimSafe</h1>
                        <a href="/#/claimsafe" style={{color: '#00AAFF'}}>Click here</a>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>   
        </div>
	);
};

export default Projects;

/*style={{backgroundColor: 'blue', width: width/3, height: height/3, verticalAlign: 'center', alignItems: 'center'}} */