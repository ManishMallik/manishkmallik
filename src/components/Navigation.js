import { Navbar, Nav, Container } from 'react-bootstrap';
import mkm_logo from '../images/mkm_logo.jpg';
import MyResume from '../documents/Manish Mallik-Resume.pdf';

const Navigation = () => {
    var route = process.env.PUBLIC_URL;
    return(
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" className="Navbar-header" variant="dark" >
                <Container>
                    <Navbar.Brand href={route}>
                        <img
                            alt="Logo"
                            src={mkm_logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-center"
                        />
                        {' '}
                        Manish Mallik
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ml-auto my-2 my-lg-0 Navbar-text"
                        style={{ maxHeight: '100px', alignItems: "center"}}
                        navbarScroll>
                            <Nav.Link href={route} className='Navbar-text'>Home</Nav.Link>
                            <Nav.Link href={route + "/about"}>About</Nav.Link>
                            <Nav.Link href={route + "/projects"}>Projects</Nav.Link>
                            <Nav.Link href={MyResume} target="_blank" rel="noreferrer">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;