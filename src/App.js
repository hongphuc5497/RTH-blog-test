import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" name="Login page" render={props => <Login {...props}/>} />
          <Route exact path="/register" name="Register page" render={props => <Register {...props}/>} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
