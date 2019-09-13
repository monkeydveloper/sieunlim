import React from 'react';
import Main from './views/pages/user/Main.js';
import RentalManagement from './views/pages/admin/RentalManagement.js';

export default class App extends React.Component {
    constructor(props){
      super(props)
      this.state={}
    }
    
    render(){
      return (
        
        <div className="app">
          <RentalManagement/>
        </div>
      )
    }
  }