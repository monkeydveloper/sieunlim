import React from 'react';

import {Container,Row, Col, Navbar, Form, FormControl, Button} from 'react-bootstrap';

export default class Footer extends React.Component {
    constructor(props) {
      super(props);
     
    }
    
    render() {
  
      return (
        <Navbar bg="dark" variant="dark">
        <Container className="footer">
            <Row>
                <Col><p>Vodka Footer</p></Col>
                <Col></Col>
            </Row>

        </Container>
        </Navbar>
        )
      }
    }
  