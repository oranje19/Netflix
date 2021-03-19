import React from 'react';
import './App.css';
import HomeScreen from './components/homeScreen/homeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './components/login/loginScreen';
import MovieDetail from './components/detail/movieDetail';
import Footer from './components/footer/footer';

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {/* {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )} */}
        {/* <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch> */}
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          {/* <Route path="/movie/:id" component={MovieDetail}>
            <MovieDetail />
          </Route> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
