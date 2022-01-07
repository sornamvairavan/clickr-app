import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage'

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/" exact>
        <h1>Hello there!</h1>
      </Route>
    </Switch>
  );
}

export default App;
