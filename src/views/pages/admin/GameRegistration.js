import React from 'react';
import {Row, InputGroup, FormControl, Button, Card, Container, Col, Image, Form, Dropdown} from "react-bootstrap"


class GameRegist extends React.Component {
    render(){
        return(
            <Container >

            <Row>
            <Card className="text-left" style={{ width: '100rem' }}>
                <Card.Header>게임등록 화면</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Container>
                    <Row className="mb-3">
                        <Col sm={3}>
                            <Image src="https://avatarfiles.alphacoders.com/709/thumb-70914.png" />
                        </Col>             
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Group as={Row} controlId="formGridEmail">
                                <Form.Label column sm={1}>이름</Form.Label>
                                    <Col sm={11}>
                                        <Form.Control placeholder="GameName" />
                                    </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                        <Form>
                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">시간</Form.Label>
                                <Col sm="9">
                                    <Form.Control type="number" placeholder="PlayTime" />
                                </Col>
                            </Form.Group>

{/* 
                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">연령</Form.Label>
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
*/}
                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">연령</Form.Label>
                                <Col sm="9">
                                <Form.Control type="number" placeholder="age">
                                </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">장르</Form.Label>
                                <Col sm="9">
                                <Form.Control as="select">
                                    <option>장르선택</option>
                                    <option>스피드</option>
                                    <option>기억력</option>
                                    <option>추리</option>
                                    <option>운</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={6}>
                        <Form>
                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">인원</Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" placeholder="Min" />
                                </Col>
                            <Form.Label column sm="2">~</Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" placeholder="Max" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">테마</Form.Label>
                                <Col sm="10">
                                <Form.Control as="select">
                                    <option>테마선택</option>
                                    <option>호러</option>
                                    <option>액션</option>
                                    <option>마피아</option>
                                    <option>??</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm="2">시스템</Form.Label>
                                <Col sm="10">
                                <Form.Control as="select">
                                    <option>시스템선택</option>
                                    <option>??</option>
                                    <option>??</option>
                                    <option>??</option>
                                    <option>??</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>
                        </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>

                            <Form.Group as={Row} controlId="formGridEmail">
                                <Form.Label column sm={1}>구성품</Form.Label>
                                    <Col sm={11}>
                                        <Form.Control placeholder="Components" />
                                    </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail">
                                <Form.Label column sm={1}>게임설명</Form.Label>
                                    <Col sm={11}>
                                        <Form.Control as="textarea" rows="6" placeholder="GameExplanation" />
                                    </Col>
                            </Form.Group>

                            {/* 
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
                            */}

                        </Col>
                    </Row>
                    <Row>
                        <Form>
                        <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                        </Form>
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