import React from 'react';

import { Table, Container, Row ,Col,Button,ButtonGroup, Form, Image, Body} from 'react-bootstrap';

import { GetDiffOfDate } from '../../../utils/DateUtil.js';
import { GameStatus } from '../../../components/game/GameInfoComp.js';
//import InfiniteScroll from '../../../utils/InfiniteScroll.js';

export default class RentalManagement extends React.Component {
    constructor(props) {
      super(props);
      //this.state = {"gameList":[{"gameId":1,"gameName":"모두의마블","gameImage":"https://t1.daumcdn.net/cfile/tistory/252AD24951DBBB5208","ownerId":"user1","ownerName":"김두부","createdAt":"2019-09-20","status":1,"rating":4},{"gameId":2,"gameName":"뱅! 뱅! 뱅!","gameImage":"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2518694C58023DA414","ownerId":"user4","ownerName":"박도블","createdAt":"2019-09-20","status":2,"rating":3},{"gameId":3,"gameName":"스플렌더","gameImage":"http://www.divedice.com/uploaded/prd/116251505701104.png","ownerId":"user4","ownerName":"김도박","createdAt":"2019-09-20","status":3,"rating":5}]};
      this.state = {"gameList":[{"gameId":1,"//meName":"모두의마블","gameImage":"https://t1.daumcdn.net/cfile/tistory/252AD24951DBBB5208","ownerId":"user1","ownerName":"김두부","createdAt":"2019-09-20","status":1,"rating":4},{"gameId":2,"gameName":"뱅! 뱅! 뱅!","gameImage":"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2518694C58023DA414","ownerId":"user4","ownerName":"박도블","createdAt":"2019-09-20","status":2,"rating":3},{"gameId":3,"gameName":"스플렌더","gameImage":"http://www.divedice.com/uploaded/prd/116251505701104.png","ownerId":"user4","ownerName":"김도박","createdAt":"2019-09-20","status":3,"rating":5},{"gameId":1,"gameName":"모두의마블","gameImage":"https://t1.daumcdn.net/cfile/tistory/252AD24951DBBB5208","ownerId":"user1","ownerName":"김두부","createdAt":"2019-09-20","status":1,"rating":4},{"gameId":2,"gameName":"뱅! 뱅! 뱅!","gameImage":"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2518694C58023DA414","ownerId":"user4","ownerName":"박도블","createdAt":"2019-09-20","status":2,"rating":3},{"gameId":3,"gameName":"스플렌더","gameImage":"http://www.divedice.com/uploaded/prd/116251505701104.png","ownerId":"user4","ownerName":"김도박","createdAt":"2019-09-20","status":3,"rating":5},{"gameId":1,"gameName":"모두의마블","gameImage":"https://t1.daumcdn.net/cfile/tistory/252AD24951DBBB5208","ownerId":"user1","ownerName":"김두부","createdAt":"2019-09-20","status":1,"rating":4},{"gameId":2,"gameName":"뱅! 뱅! 뱅!","gameImage":"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2518694C58023DA414","ownerId":"user4","ownerName":"박도블","createdAt":"2019-09-20","status":2,"rating":3},{"gameId":3,"gameName":"스플렌더","gameImage":"http://www.divedice.com/uploaded/prd/116251505701104.png","ownerId":"user4","ownerName":"김도박","createdAt":"2019-09-20","status":3,"rating":5}]};
    }
    
    render() {
      return (
        
        <Container>
            <Row>
              <Col md={{span:2,offset:9}}>
                <Form.Control as="select">
                  <option>전체</option>
                  <option>예약</option>
                  <option>대여중</option>
                  <option>연체</option>
                </Form.Control>
              </Col>
              <Col md={1}>
                <ButtonGroup>
                  <Button variant="secondary">L</Button>
                  <Button variant="secondary">C</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
            
            <Table bordered hover>
                <col width="20%"/>
                <col width="50%"/>
                <col width="15%"/>
                <col width="15%"/>
              
               
                {this.state.gameList.map((game, i) => {
                  return (
                    <tr index={i}> 
                      <td className="text-center"><Image src={game.gameImage} width="150px" rounded /></td>
                      <td>{game.gameName} {GetDiffOfDate(game.createdAt)}<br></br> owned by {game.ownerName}</td>
                      <td>{GameStatus(game.status)}</td>
                      <td>{game.rating}/10</td>
                    </tr>
                  );
                })}
              
                
            
            </Table>
            </Row>
        </Container>
        
      )
    }
  }

