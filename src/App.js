import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/pages/user/Main.js';
import RentalManagement from './views/pages/admin/RentalManagement.js';
import GameManagement from './views/pages/admin/GameManagement.js';
import GameRegedit from './views/pages/admin/GameRegistration.js';

export default class App extends React.Component {
    constructor(props){
      super(props)
      this.state={}
    }

    render(){
      return (
        <div className="app">
          <BrowserRouter>
            <Route exact path="/" component={Main}/>
            <Route exact path="/management" component={RentalManagement}/>
            <Route exact path="/gameList" component={GameManagement}/>
            <Route exact path="/gameRegedit" component={GameRegedit}/>
          </BrowserRouter>
        </div>
      )
    }
  }
