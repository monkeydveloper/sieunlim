
import React from 'react';
import { Button} from 'react-bootstrap';

const GameComponent = (status) => {
    this.status = 1;
    let str = '에러';
    let variant = '';
    const statusList = 
    {       
    1:{
        name: '예약',
        variant: 'outline-primary'
    },
    2:{
        name: '대여',
        variant: 'outline-success'
    },
    3:{
        name: '연체',
        variant: 'outline-danger'
    }};
    str = statusList[status].name;
    variant = statusList[status].variant;
  
    return(
      <Button variant={variant}>{str}</Button>
    );
  }
  export default GameComponent;