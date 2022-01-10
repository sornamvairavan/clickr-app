import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage'
import * as sessionActions from "./store/session"
import Navigation from './components/Navigation'
import PhotoYou from './components/PhotoYou'
import PhotoExplore from './components/PhotoExplore'
import PhotoAddForm from './components/PhotoAddForm'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <PhotoYou />
          </Route>
          <Route path="/explore" exact>
            <PhotoExplore />
          </Route>
          <Route path="/uploadPhoto" exact>
            <PhotoAddForm />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch> )}
    </>
  );
}

export default App;
