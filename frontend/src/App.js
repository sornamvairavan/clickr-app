import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage'
import * as sessionActions from "./store/session"
import Navigation from './components/Navigation'
import PhotoYou from './components/PhotoYou'
import PhotoExplore from './components/PhotoExplore'
import PhotoAddForm from './components/PhotoAddForm'
import PhotoEditForm from "./components/PhotoEditForm";
import PageNotFound from "./components/PageNotFound";
import SplashPage from "./components/SplashPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector((state) => state.session.user);
  
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
            {user ? <PhotoYou /> : <SplashPage />}   
          </Route>
          <Route path="/explore" exact>
            <PhotoExplore />
          </Route>
          <Route path="/uploadPhoto" exact>
            <PhotoAddForm />
          </Route>
          {/* <Route path="/photos/:photoId" exact render={(props) => {
            const photoId = props.match.params.photoId
            return <PhotoDetails photoId={photoId}/>
          }}
            >
          </Route> */}
          <Route path="/photos/:photoId/edit" exact>
            <PhotoEditForm />
          </Route>
          <Route path="/login" exact>
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch> )}
    </>
  );
}

export default App;
