import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Upload from "./components/Upload";
import View from "./components/View";
import Deliver from "./components/Deliver";
import Home from "./components/Home"

function App() {
  return (
      <> 
      <Navbar  bg="dark" expand="md" variant="dark">
            <Container>
                <Navbar.Brand href="https://github.com/Vam-c/Skill-iT_Cognition">Skill-iT!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{padding: " 10px 80%"}}>
                    <Nav.Link className="nav-button"  as={Link} to="/instructor">Contribute!</Nav.Link>
                    {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
                    <Nav.Link className="nav-button" as={Link} to="/">Learn</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructor" element={<Upload />} />
        <Route path="/watch" element={<Deliver />} />
        {/* <Route path="/login" element={<Content />} /> */}
    </Routes>
    </>
  );
}

export default App;
