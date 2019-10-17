import React from 'react';

import {Container, Row, CardDeck, Navbar, Dropdown, Form, FormControl, Button, Col} from 'react-bootstrap';

import CardObj from "../../../components/game/Card.js"
export default class RentalManagement extends React.Component {
    constructor(props) {
      super(props);
      this.cardParam = [{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20190805_58%2Fpirisori03%40naver.com_1565013727749UUNmE_JPEG%2F654784510_yAu0QbzD_1564542766_img44.jpg&type=b400"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"},{title:"뱅", user:"한명기",userMin:"2",userMax:"3",genre:"스릴러",playTime:"30분",difficulty:"중",URL:"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"}]
    }
    
    render() {
  
      return (
        <div>
        <Container>
          <Row>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </Row>

          <Row>
            <CardDeck>
              {
                this.cardParam.map((rnfl, i) =>{
                  return (<CardObj param={rnfl} />);
                })
              }
            </CardDeck>
          </Row>
        </Container>
        </div>
      )
    }
  }

