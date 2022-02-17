import React, {Component} from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  SignUp from "../SignUp/Signup";
import  SignIn from "../SignIn/SignIn";
import Dashboard from "../Dashboard/Dashboard";
export default class Header extends Component {
  render() {
    return <Router> <div>
        
<Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">Khadamni.tn</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/SignIn">Sign In</Nav.Link>
        <Nav.Link as={Link} to="/SignUp">Sign Up</Nav.Link>
        
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/Dashboard">Dashboard</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Look for a service"
          className="me-2"
          aria-label="Search"
          
        />
        <Button bg="light" variant="light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
    
    <div>
       <Routes>
           <Route path="/SignUp" element={<SignUp/>}/>
       </Routes>
      
       <Routes>
             <Route path="/SignIn" element={<SignIn/>}/>
       </Routes>
       
       <Routes>
         <Route path="/Dashboard" element={<Dashboard/>}/>
       </Routes>
       
   </div>
        
        </Router>
    ;
  }
}