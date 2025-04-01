import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Notes App</Navbar.Brand>
    </Container>
  </Navbar>
);
export default Header;