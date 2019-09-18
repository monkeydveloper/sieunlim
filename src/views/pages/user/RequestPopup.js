import React, { useState } from 'react';
import {
  Modal,
  Button,
  Input,
  Form
} from 'react-bootstrap';

const RequestPopup = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        대여 신청하기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>대여 신청</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          게임 대여 항목(TODO :: 각 게임별 대여 개수 인풋 뚫어줘야 함.) <br />
          1. 두부왕국 <br />
          2. 도블ㄹㄹ <br />
          *은 필수 항목입니다.(TODO :: 강조 표시 및 색상 변경)
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>*이름</Form.Label>
              <Form.Control size="sm" type="text" placeholder="이름(ex. 임박한)" />
              <Form.Text className="text-muted">
                실명으로 작성해주세요.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>휴대전화</Form.Label>
              <Form.Control size="sm" type="text" placeholder="휴대전화(ex. 01049494814)" />
              <Form.Text className="text-muted">
                반납일이 다가왔을 때 문자보낼 휴대전화 번호입니다.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>*대여 기간(TODO :: 캘린더가 없다;)</Form.Label>
              <Form.Control type="text" placeholder="이 날부터(ex. 20190919)" />
              <Form.Control type="text" placeholder="이 날까지(ex. 20190930)" />
              <Form.Text className="text-muted">
                구분자 받을까? 숫자만 입력?
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="반납일에 문자 받기(TODO :: 이거 체크했으면 휴대전화도 필수로 체크하기)" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={handleClose}>
            신청하기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RequestPopup;
