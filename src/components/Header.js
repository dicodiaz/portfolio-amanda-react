import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onToggleClick = () => setShowMenu((prevShowMenu) => !prevShowMenu);

  return (
    <header>
      <Navbar id="navbar" bg="dark" variant="dark" expand="md" fixed="top" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold py-0">
            Amanda López
          </Navbar.Brand>
          <Nav.Link href="https://www.instagram.com/amandapaolopez">
            <FaInstagram className="fs-5 text-white" />
          </Nav.Link>
          <Nav.Link href="https://www.tiktok.com/@amandapaolopez">
            <FaTiktok className="fs-5 text-white" />
          </Nav.Link>
          <Navbar.Toggle className="border-0 fs-5 text-white" onClick={onToggleClick}>
            {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#about" onClick={onToggleClick}>
                About me
              </Nav.Link>
              <Nav.Link href="#portfolio" onClick={onToggleClick}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#commercial" onClick={onToggleClick}>
                Commercial
              </Nav.Link>
              <Nav.Link href="#contact" onClick={onToggleClick}>
                Contact me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
