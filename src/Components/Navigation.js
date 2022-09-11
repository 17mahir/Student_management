import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navigation() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Student Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/student">Add Student</Nav.Link>
            <Nav.Link href="/liststudents">View Student</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

