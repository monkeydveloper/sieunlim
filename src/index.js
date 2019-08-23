import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import './index.css';

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {/* TODO */}
//       </button>
//     );
//   }
// }
//
// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }
//
//   render() {
//     const status = 'Next player: X 바ㅏ로 나옴';
//
//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }
//
// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gameList : [{"gameId":"game1","gameName":"두부왕국","ownerId":"user1","ownerName":"김두부","lendableYn":"Y","lendHistory":[{"borrowerId":"user3","borrowerName":"이빌림","borrowStartDate":"2019-01-15 00:00:00","borrowEndDate":"2019-01-25 23:59:59","message":"두부왕국 유잼"},{"borrowerId":"user3","borrowerName":"이빌림","borrowStartDate":"2019-01-15 00:00:00","borrowEndDate":"2019-01-25 23:59:59","message":"쏘쏘"},{"borrowerId":"user2","borrowerName":"박빌리","borrowStartDate":"2019-01-01 00:00:00","borrowEndDate":"2019-01-10 23:59:59","message":"노잼이네;"}]},{"gameId":"game2","gameName":"도블","ownerId":"user4","ownerName":"박도블","lendableYn":"N","lendHistory":[{"borrowerId":"user5","borrowerName":"최게임","borrowStartDate":"2019-07-01 00:00:00","borrowEndDate":"2019-08-31 23:59:59","message":""},{"borrowerId":"user3","borrowerName":"이빌림","borrowStartDate":"2019-03-06 00:00:00","borrowEndDate":"2019-03-31 23:59:59","message":"두부왕국보다 잼"},{"borrowerId":"user2","borrowerName":"박빌리","borrowStartDate":"2019-03-01 00:00:00","borrowEndDate":"2019-03-05 23:59:59","message":"종나재밋네;"}]}]};
  }
  render() {

    return (
      <div className="layout-main">
        <div className="header-background">
          <div className="header-contents">
            <Navbar bg="light" expand="lg">
              <Navbar.Brand>Vodka</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>Game</Nav.Link>
                  <Nav.Link>Link</Nav.Link>
                </Nav>
                <Button variant="outline-success">Login</Button>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
        <div className="layout-contents">

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Owner</th>
              <th>Lendable</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.gameList.map((contact, i) => {
                return(
                  <tr>
                    <td>{i+1}</td>
                    <td>{contact.gameName}</td>
                    <td>{contact.ownerName}</td>
                    <td>{contact.lendableYn}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>

        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
