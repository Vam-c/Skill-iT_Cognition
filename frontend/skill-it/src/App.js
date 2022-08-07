import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Upload from "./components/Upload";
import Player from "./components/Player";
import Home from "./components/Home"
import Thank from "./components/Thank";

function App() {
  return (
      <> 
      <Navbar  bg="dark" expand="md" variant="dark">
            <Container>
                <Navbar.Brand  href="https://github.com/Vam-c/Skill-iT_Cognition"><i  className="fa-solid fa-pen-nib" style={{padding: "10px"}}></i> Skill-iT!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
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
        <Route path="/watch" element={<Player />} />
        <Route path="/thank" element={<Thank />} />
        {/* <Route path="/login" element={<Content />} /> */}
    </Routes>
    </>
  );
}

export default App;
