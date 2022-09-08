import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navigation() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Student Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Add Student</Nav.Link>
            <Nav.Link href="#features">View Student</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

