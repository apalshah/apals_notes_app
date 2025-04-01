import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand>Notes App</Navbar.Brand>
        {user && (
          <Button variant="outline-light" size="sm" onClick={logout} data-testid="logout-btn">
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
