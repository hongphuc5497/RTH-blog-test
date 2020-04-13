import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from "./route/PrivateRoute";
import { AuthContext } from "./context/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const Blog = React.lazy(() => import('./pages/Blog'));

function App(props) {
  const existingToken = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(existingToken);

  const setToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setAuthToken(token);
  }

  return (
    <>
      <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login page" render={props => <Login {...props} />} />
              <Route exact path="/register" name="Register page" render={props => <Register {...props} />} />
              <Route exact path="/" name="Home page" render={props => <Blogs {...props} />} />
              <Route exact path="/blog" name="Blog detail page" render={props => <Blog {...props} />} />
            </Switch>
          </React.Suspense>
        </Router>
      </AuthContext.Provider>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover={false}
      />
    </>
  )
}

export default App;
