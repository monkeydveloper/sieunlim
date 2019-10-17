
import React from 'react';
import { Button, Image} from 'react-bootstrap';

export const GameStatus = (status) => {
    
    //let str = '에러';
    //let variant = '';
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
    const { name ='에러', variant=''} = statusList[status]
    //str = statusList[status].name;
    //variant = statusList[status].variant;
  
    return(
      <Button variant={variant}>{name}</Button>
    );
  }

  