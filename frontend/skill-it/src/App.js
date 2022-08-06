import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Upload from "./components/Upload";
import View from "./components/View";
import Deliver from "./components/Deliver";
function App() {
  const [isStudent, setStudent] = useState(true);
  return (
      <> 
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="https://github.com/Vam-c/Skill-iT_Cognition">Skill-iT!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => {setStudent(false)}} as={Link} to="/instructor">Contribute!</Nav.Link>
            {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
            <Nav.Link onClick={() => {setStudent(true)}} as={Link} to="/">Learn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        <Route path="/instructor" element={<Upload />} />
        <Route path="/watch" element={<Deliver />} />
        {/* <Route path="/login" element={<Content />} /> */}
    </Routes>
    <div>
      {isStudent && <View />}
    </div>
    </>
  );
}

export default App;
