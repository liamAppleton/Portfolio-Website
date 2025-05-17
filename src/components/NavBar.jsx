import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: '#5D8A6D' }}>
      <Container>
        <Nav className="ms-auto">
          <Nav.Link href="#home" style={{ color: '#EAE7DC' }}>
            Home
          </Nav.Link>
          <Nav.Link href="#features" style={{ color: '#EAE7DC' }}>
            Projects
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ color: '#EAE7DC' }}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
