import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import {Container} from 'semantic-ui-react';
import EventForm from '../../features/event/EventForm/EventForm';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/user/UserDetailed/UserDetailedPage';
import SettingDashboard from '../../features/user/Setting/SettingDashboard';
import HomePage from '../../features/home/HomePage';




class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/> 
        </Switch>

        <Route path="/(.+)" render={()=>(
          <div>
            <NavBar/>
            <Container className="main">
              <Switch>           
                <Route path="/events" component={EventDashboard}/>   
                <Route path="/event/:id" component={EventDashboard}/>   
                <Route path="/people" component={PeopleDashboard}/>  
                <Route path="/profile/:id" component={UserDetailed}/>  
                <Route path="/settings" component={SettingDashboard}/>  
                <Route path="/createEvent" component={EventForm}/>  
              </Switch>       
            </Container>       
          </div>
        )}/>

      </div>
    );
  }
}

export default App;
