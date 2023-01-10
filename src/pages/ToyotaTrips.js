import React from 'react';
//import {Container, Row, Col } from 'react-bootstrap';
import ToyotaTrips from '../images/ToyotaTrips.png';

const ToyotaTripsPage = () => {
    return(
        <div className='App-header'>
            <br/>
            <h1>Toyota Trips</h1>
            <br/>
            <img alt="Manish" src={ToyotaTrips}/>
            <br/>
            <div className='text-left'>
                <h1>Overview</h1>
                <br/>
                <p>Project: Developed during HackUTD IX</p>
                <p>Tech Stack: Swift and MapKit API</p>
                <p>Role: Frontend Developer</p>
                <br/>
                <h1>Challenge Statement</h1>
                <p>In a world of connectivity and cool tech, customers want to extend amazing experiences into all aspects
                of their lives, including their experience associated with vehicles. Your mission is to build a solution
                to improve the end-to-end vehicle experience. Whether it is creating a convenience service, a modern
                mobility solution, focusing on social good or building a new or enhanced experience, we challenge you to
                start your impossible by building something Toyota or Lexus customers will LOVE. -Toyota</p>
                <br/>
                <h1>Solution</h1>
                <p>What me and my team did first is explore Toyota's websites and applications and analyze what features
                Toyota had or could do. We used this information in our brainstorming process to come up with ideas. 
                Eventually, we came up with a solution that could improve the social aspect within Toyota's vehicles. The
                idea is to develop a mobile application that allows Toyota users to connect, plan trips together from
                a destination to another, track their locations and status during a trip, and share trips with each other
                and other Toyota users.</p>
                <br/>
                <h1>Design</h1>
                <p></p>
                <p>We used Swift and MapKit API to develop the application.</p>
                <br/>
            </div>
        </div>
    );
}

export default ToyotaTripsPage;