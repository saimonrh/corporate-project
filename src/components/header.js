import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader(){

return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tazico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link> 
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#Teams">Teams</Nav.Link>
            <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Contract">Contract</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

}