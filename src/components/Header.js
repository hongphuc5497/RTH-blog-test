import React from 'react';
import { withRouter } from 'react-router-dom';

function Header(props) {
  function logOut() {
    localStorage.clear();
    props.history.push("/login");
  }

  return (
    <div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <header className="site-navbar" role="banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 search-form-wrap js-search-form">
              <form method="get" action="#">
                <input type="text" id="s" className="form-control" placeholder="Search..." />
                <button className="search-btn" type="submit"><span className="icon-search" /></button>
              </form>
            </div>
            <div className="col-4 site-logo">
              <a href="index.html" className="text-black h2 mb-0">RTH Blog</a>
            </div>
            <div className="col-8 text-right">
              <nav className="site-navigation" role="navigation">
                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                  <li><a href="category.html">Home</a></li>
                  <li><a href="category.html">Politics</a></li>
                  <li><a href="category.html">Tech</a></li>
                  <li><a href="category.html">Entertainment</a></li>
                  <li><a href="category.html">Travel</a></li>
                  <li><a href="category.html">Sports</a></li>
                  <li className="d-none d-lg-inline-block"><a href="#" className="js-search-toggle"><span className="icon-search" /></a></li>
                </ul>
              </nav>
              <a href="#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3" /></a></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default withRouter(Header);