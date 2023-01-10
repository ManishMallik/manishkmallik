import React from 'react';
import manishPhoto from '../images/photo.jpg';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const Home = () => {

	var width = window.innerWidth;
	var height = window.innerHeight;

	return (
		<div className="App-header">
			<br/>
			<h1>
				My name is Manish Mallik, and I am a computer science major at the University of Texas at 
				Dallas! I am an aspiring software developer with an interest in app development.
			</h1>
		</div>
	);
};

export default Home;

/*
<div className='row'>
					<div className='box-cell box1'>
						<img alt="Manish" src={manishPhoto} width="200" height="200"/>
					</div>
					<div className='box-cell box2'>
						<p>
							My name is Manish Mallik, and I am a computer science major at the University of Texas at 
							Dallas!
						</p>
					</div>
				</div>
 */
/*
	<Row>
					<Col>
						<img alt="Manish" src={manishPhoto} width="30%" height="30%"/>
					</Col>
					<Col>
						<p>
							My name is Manish Mallik, and I am a computer science major at the University of Texas at 
							Dallas!
						</p>
					</Col>
				</Row>
 */