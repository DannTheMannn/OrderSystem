
import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

class TabMenu extends Component {
  state = {  } 
  render() { 
    return (
      <Navbar bg="dark" variant="dark">

      <LinkContainer to="/">
      <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

        <LinkContainer to="/service">
          <Nav.Link>Service</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>

          <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Bestellungen aufnehmen"
          />
        </Form>
        </Nav> 
        </Navbar.Collapse>
    </Navbar>
  
    );
  }
}
 





export default TabMenu;


/*
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="food" title="Food">
          <FoodSectionComponent />
        </Tab>
        <Tab eventKey="drinks" title="Drinks">
          <h1>drinks</h1>
        </Tab>
      </Tabs>

    </>
    
    
    



  
  */
