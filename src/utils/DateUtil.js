import React from 'react';

import { Image } from 'react-bootstrap';

export const GetDiffOfDate = (createdAt) => {

    let createdDate = new Date(createdAt);
    let date = new Date();
    let subDate = new Date( date - createdDate );
    
    const result = subDate.getDate() - 1;
    
    if(result<=7){
        return(
            <Image src="https://image.flaticon.com/icons/png/512/104/104366.png" width="30px"></Image>
        );
    }
}