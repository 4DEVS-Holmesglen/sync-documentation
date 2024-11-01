import * as styles from './Header.css';
import logoImg from '../../assets/images/Frame 4.png'

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar className={styles.navbar} variant="light" expand="lg" >
      <Container>
        <Navbar.Brand className={styles.brandLink} as={Link} to='/'>
          <img className={styles.logo} src={logoImg} alt="4devs" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* STANDARD NAVLINKS */}
          <Nav className='me-auto'>
          </Nav>
        
          <Nav>
          <Nav.Link className={styles.navLink} as={Link} to='/'>Home</Nav.Link>
          <Nav.Link className={styles.navLink} as={Link} to='/uicompo'>Customization</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='https://github.com/4DEVS-Holmesglen/Sync-test'>Documentation</Nav.Link>
            <Nav.Link className={styles.navLink}  as={Link} to='https://github.com/4DEVS-Holmesglen/4devs-alert-btn-component'><FaGithub /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
