import React from 'react';
import manishPhoto from '../images/photo.jpg';
import Cooking from '../images/cooking.jpg';
import Weightlifting from '../images/Weightlift.jpg';
import Sports from '../images/Sport_balls.svg.png';
import Networking from '../images/Networking.jpg';
import { Container, Figure, Row, Col, Carousel } from 'react-bootstrap';

const About = () => {
	
    var width = window.innerWidth;
	//var height = window.innerHeight;

    return (
		<div className="App-header">
            <br/>
			<br/>
			<Container>
				<Row>
					<Col className='m-10' lg={3} xl={4}>
						<img alt="Manish" src={manishPhoto}/>
					</Col>
					<Col className='m-10 about-text' lg={7} xl={6}>
						<p>
						My name is Manish Mallik, and I am a computer science major at the University of Texas at 
						Dallas! I am an incoming Software Engineer Intern at JPMorgan Chase & Co. I am also the 
						Corporate Relations officer of the User Experience club at UTD. {<br/>}{<br/>}
						As a person who likes problem solving, creating, and helping people, I have been able to do those
						3 in the field of computer science, mostly through software development.
						</p>
					</Col>
				</Row>
			</Container>
			<br/>
			<div className='hobbies-text'>
				<p>Here are my hobbies when I am not programming or doing anything computer 
					science related.
				</p>
			</div>
			<br/>
			<br/>

			<Carousel variant="dark" style={{width: width/2.5, height: width/2.5}}>
				<Carousel.Item>
					<img src={Weightlifting} alt="Weightlifting" width={width/2.5} height={width/2.5}
					/>
					<Carousel.Caption>
						<h3>Weightlifting</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={Sports} alt="Sports" style={{backgroundColor: 'white'}} width={width/2.5} height={width/2.5}/>
					<Carousel.Caption>
						<h3>Sports</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={Cooking} alt="Cooking" width={width/2.5} height={width/2.5}
					/>
					<Carousel.Caption>
						<h3>Cooking</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<br/>
			<br/>
        </div>
	);
};

export default About;
/*
<div className='hobbies-container'>
				<HobbyComponent source={manishPhoto} width={width/5} height={height/5} info='Why does'/>
				<HobbyComponent source={manishPhoto} width={width/5} height={height/5} info='the image'/>
				<HobbyComponent source={manishPhoto} width={width/5} height={height/5} info='size'/>
				<HobbyComponent source={manishPhoto} width={width/5} height={height/5} info='change??'/>
			</div>
			<br/>
			<br/>

			<Col className='m-10'>
					<Figure className='figure-align'>
						<Figure.Image width={width/5} height={width/5} alt="Manish" src={Networking}/>
						<Figure.Caption style={{color: 'white'}}>
							Social Networking
						</Figure.Caption>
					</Figure>
				</Col>

			<div className='about-container'>
				<div className='image'>
					<img alt="Manish" src={manishPhoto} width={width/5} height={width/5}/>
				</div>
				<br/>
				<br/>
				<div className='text'>
					<p>
						My name is Manish Mallik, and I am a computer science major at the University of Texas at 
						Dallas! I am an incoming Software Engineer Intern at JPMorgan Chase & Co. I am also the 
						Corporate Relations officer of the User Experience club at UTD. {<br/>}{<br/>}
						As a person who likes problem solving, creating, and helping people, I have been able to do those
						3 in the field of computer science, mostly through software development.
					</p>
				</div>
			</div>
			<br/>
			<br/>

			<Row>
				<Col className='m-10' md={5} lg={2}>
					<Figure className='figure-align'>
						<Figure.Image width={width} height={width} alt="Manish" src={Weightlifting}/>
						<Figure.Caption style={{color: 'white'}}>
							Weightlifting
						</Figure.Caption>
					</Figure>
				</Col>
				<Col className='m-10' md={5} lg={2}>
					<Figure className='figure-align'>
						<Figure.Image width={width} height={width} alt="Manish" src={Sports} style={{backgroundColor: 'white'}}/>
						<Figure.Caption style={{color: 'white'}}>
							Sports
						</Figure.Caption>
					</Figure>
				</Col>
				<Col className='m-10' md={5} lg={2}>
					<Figure className='figure-align'>
						<Figure.Image width={width} height={width} alt="Manish" src={Cooking}/>
						<Figure.Caption style={{color: 'white'}}>
							Cooking
						</Figure.Caption>
					</Figure>
				</Col>
				<Col className='m-10' md={5} lg={2}>
					<Figure className='figure-align'>
						<Figure.Image width={width} height={width} alt="Manish" src={Networking}/>
						<Figure.Caption style={{color: 'white'}}>
							Networking with professionals
						</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<Carousel variant="dark" style={{width: width/2.5, height: width/2.5}}>
				<Carousel.Item>
					<img src={Weightlifting} alt="Weightlifting" width={width/2.5} height={width/2.5}
					/>
					<Carousel.Caption>
						<h3>Weightlifting</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={Sports} alt="Sports" style={{backgroundColor: 'white'}} width={width/2.5} height={width/2.5}/>
					<Carousel.Caption>
						<h3>Sports</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={Cooking} alt="Cooking" width={width/2.5} height={width/2.5}
					/>
					<Carousel.Caption>
						<h3>Cooking</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
 */
