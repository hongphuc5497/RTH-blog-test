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
const CreateBlog = React.lazy(() => import('./pages/CreateBlog'));
const EditBlog = React.lazy(() => import('./pages/EditBlog'));

function App() {
  const existingToken = localStorage.getItem("token");
  const existingName = localStorage.getItem("name");
  const existingEmail = localStorage.getItem("emai");

  const [authToken, setAuthToken] = useState(existingToken);
  const [name, setAuthName] = useState(existingName);
  const [email, setAuthEmail] = useState(existingEmail);

  const setToken = (token) => {
    localStorage.setItem("token", token);
    setAuthToken(token);
  }
  const setName = (name) => {
    localStorage.setItem("name", name);
    setAuthName(name);
  }
  const setEmail = (email) => {
    localStorage.setItem("email", email);
    setAuthEmail(email);
  }

  return (
    <>
      <AuthContext.Provider value={{ authToken, setAuthToken: setToken, name, setAuthName: setName, email, setAuthEmail: setEmail }}>
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login page" render={props => <Login {...props} />} />
              <Route exact path="/register" name="Register page" render={props => <Register {...props} />} />
              <Route exact path="/" name="Blogs page" render={props => <Blogs {...props} />} />
              <Route exact path="/blog/:blogId" name="Blog detail page" render={props => <Blog {...props} />} />
              <Route exact path="/blog/:blogId/edit-blog" name="Edit blog page" render={props => <EditBlog {...props} />} />
              <PrivateRoute exact path="/create-blog" name="Create blog page" component={CreateBlog}/>
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
