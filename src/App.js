import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import MovieList from './MovieList';
import StarshipList from './StarshipList';
import StarshipDesc from './StarshipDesc'
import MyStarships from './MyStarships';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MovieList}/>
          <Route exact path='/:id/startships' render={routeProps => <StarshipList {...routeProps}/>}/>
          <Route exact path='/starship/:starship' render={routeProps => <StarshipDesc {...routeProps}/>}/>
          <Route exact path='/mystarships' render={routeProps => <MyStarships {...routeProps}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
