import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useAuth } from "../context/auth";
import { Button } from 'reactstrap';

function Header(props) {
  const { authToken } = useAuth();

  function logOut() {
    localStorage.clear();
    props.history.go("/");
  }

  return (
    <header className="site-navbar" role="banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4 site-logo">
            <Link to="/" className="text-black h2 mb-0">RTH Blog</Link>
          </div>

          <div className="col-8 text-right">
            <nav className="site-navigation" role="navigation">
              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                {
                  authToken && <li><Link to="/create-blog">Create blog</Link></li>
                }
                {
                  authToken ? (
                    <li>
                      <Button onClick={logOut}>Logout</Button>
                    </li>
                  ) : (
                      <li>
                        <Link to="/login">
                          <Button color="primary">Login</Button>
                        </Link>
                      </li>
                    )
                }
              </ul>
            </nav>
          </div>
        </div>

      </div>
    </header>
  );
}

export default withRouter(Header);