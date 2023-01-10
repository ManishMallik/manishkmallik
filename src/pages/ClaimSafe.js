import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import ClaimSafe from '../images/ClaimSafe.png';

const ClaimSafePage = () => {
    return(
        <div className='App-header'>
            <br/>
            <h1>ClaimSafe</h1>
            <br/>
            <img alt="Manish" src={ClaimSafe}/>
        </div>
    );
}

export default ClaimSafePage;