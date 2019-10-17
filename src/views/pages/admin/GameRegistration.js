import React from 'react';
import {Row, InputGroup, FormControl, Button, Card, Container, Col, Image, Form, Dropdown} from "react-bootstrap"


class GameRegist extends React.Component {
    render(){
        return(
            <Container>

            <Row>
            <Card className="text-left" style={{ width: '100rem' }}>
                <Card.Header>게임등록 화면</Card.Header>
                <Card.Body>
                    <Card.Title>보드카 등록 화면에 오신것을 환영 합니다!!</Card.Title>
                    <Container>
                    <Row className="mb-3">
                        <Col sm={3}>
                            <Image src="https://avatarfiles.alphacoders.com/709/thumb-70914.png" />
                        </Col>             
                        
                        <Col sm={9}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">유저 이름</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                placeholder="UserName"
                                aria-label="UserName"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup style={{ height: '9rem' }}>
                                <InputGroup.Prepend>
                                <InputGroup.Text>게임 설명</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                        <Form>
                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">게임이름</Form.Label>
                                <Col sm="9">
                                    <Form.Control placeholder="GameName" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">사용인원</Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" placeholder="Member" />
                                </Col>
                            <Form.Label column sm="1">~</Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" placeholder="Member" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">게임분류</Form.Label>
                                <Col sm="3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    게임마스터
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">액션</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">순발력</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">뒤지게 재밌는</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </Col>
                                <Col sm="6">
                                <Form.Control placeholder="Member" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">게임시간</Form.Label>
                                <Col sm="9">
                                <Form.Control as="select">
                                    <option>시간선택</option>
                                    <option>5분 ~ 10분</option>
                                    <option>10분 ~ 20분</option>
                                    <option>20분 ~ 30분</option>
                                    <option>30분 이상</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={6}>
                        <Form>
                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">주임이름</Form.Label>
                                <Col sm="10">
                                    <Form.Control placeholder="UserName" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">휴대폰</Form.Label>
                                <Col sm="2">
                                    <Form.Control placeholder="Num" />
                                </Col>
                            <Form.Label column sm="1">~</Form.Label>
                                <Col sm="3">
                                    <Form.Control placeholder="Nember" />
                                </Col>
                            <Form.Label column sm="1">~</Form.Label>
                                <Col sm="3">
                                    <Form.Control placeholder="Nember" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">이메일</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder="E-Mail" />
                                </Col>
                            </Form.Group>
                        </Form>
                        </Col>
                    </Row>
                    </Container>
                </Card.Body>
                <Card.Footer >
                    <Row className="text-right">
                        <Col>
                            <Button variant="primary">등록취소</Button>
                        </Col>
                            <Button variant="primary">등록완료</Button>
                    </Row>
                </Card.Footer>
            </Card>
            </Row>
            </Container>
        )
    }
}

export default GameRegist;