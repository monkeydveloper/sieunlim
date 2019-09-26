import React from 'react';
import {ListGroup, ListGroupItem, Button, Card, Container, Col} from "react-bootstrap"
//import 'bootstrap/dist/css/bootstrap.min.css';

const enumList = {
    RENT : 1,
    DONE : 2
}

function getGameStatusByKey(state){
    
    // state == enumList.RESERVATION
    
    getStatusCode(enumList.RENT);
}

const gameStatusList = {
    1 : {
        name: "rent",
        className: "classRent"
    },
    2 : {
        name: "done",
        className: "classDone"
    }
};

function getStatusCode(status) {
    return gameStatusList[status];
};
function main() {
    console.log(">> getStatusCode :: ", getStatusCode("RENT"));
};

class CardObj extends React.Component {
    render(){
    return(
        <Col md={3}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.param.URL} />
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            재밌는 게임입니다.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>권장 인원 : {this.props.param.userMin} ~ {this.props.param.userMax}</ListGroupItem>
            <ListGroupItem>장르 : {this.props.param.genre}</ListGroupItem>
            <ListGroupItem>적정 시간 : {this.props.param.playTime}</ListGroupItem>
            <ListGroupItem>난이도 : {this.props.param.difficulty}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">카드 정보</Card.Link>
            <Card.Link href="#">정보 수정</Card.Link>
        </Card.Body>
        </Card>
        </Col>
    )
}
}



export default CardObj;