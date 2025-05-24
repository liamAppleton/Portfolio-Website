import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const NavBar = () => {
  const handleClick = (dest) => {
    const url =
      dest === 'linkedin'
        ? 'https://www.linkedin.com/in/liamappleton1/'
        : 'https://github.com/liamAppleton';
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };
  return (
    <Navbar
      sticky="top"
      style={{
        backgroundColor: '#5D8A6D',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container>
        <Nav className="ms-auto d-flex align-items-center gap-2">
          <Nav.Link href="#home" className="navbar-link" active={false}>
            Home
          </Nav.Link>
          <Nav.Link href="#projects" className="navbar-link" active={false}>
            Projects
          </Nav.Link>
          <div className="d-flex gap-2 ms-auto me-auto">
            <FaLinkedin
              size={20}
              className="navbar-link"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick('linkedin')}
            />
            <FaGithub
              size={20}
              className="navbar-link"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick('github')}
            />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};
