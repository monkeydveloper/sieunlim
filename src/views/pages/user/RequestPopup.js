import React, { useState } from 'react';
import {
  Modal,
  Button,
  Form
} from 'react-bootstrap';

const RequirementFlag = () => {
  // 왜 안 되냠 ㅜ
  let classHighlight = {
    color: 'red',
    background: 'lightgrey'
  };
  return (
    <span className={classHighlight}>*</span>
  )
};

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
        {props.selectedGame.gameName !== undefined ? 
        <>
        <Modal.Body>
          선택한 게임은 <b>{props.selectedGame.ownerName}님의 {props.selectedGame.gameName}</b> 입니다. <br />
          아래에 신청자 정보를 입력해주세요. * 표시는 필수 항목입니다.
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
              <Form.Label>*대여 기간</Form.Label>
              <Form.Control type="text" placeholder="이 날부터(ex. 20190919)" />
              <Form.Control type="text" placeholder="이 날까지(ex. 20190930)" />
              <Form.Text className="text-muted">
                구분자 받을까? 숫자만 입력?
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="반납일에 문자 받기" />
            </Form.Group>
            <Form.Group controlId="formTODOList">
              <div>TODO :: </div>
              <div>여러 게임을 한 번에 대여하는 건 나중에 합시다.</div>
              <div>강조 표시 및 색상 변경</div>
              <div>캘린더가 없다;</div>
              <div>반납일에 문자 받기 체크했으면 휴대전화도 필수로 체크하기</div>
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
        </>
        :
        <>
        <Modal.Body>
          선택한 게임이 없습니다.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              취소
            </Button>
        </Modal.Footer>
        </>
        }
      </Modal>
    </div>
  );
}

export default RequestPopup;
