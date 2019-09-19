
import React from 'react';
import { Button} from 'react-bootstrap';

export const IsNewGame = (createdAt) => {
    
    let createdDate = new Date(createdAt);
    let date = new Date();
    let sub = date - createdDate;
    console.log(sub);
    //let test = new Date(sub);
    //console.log(date - createdDate);
    //console.log(test.getTime());
    


}
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

  