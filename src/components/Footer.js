import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="site-footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <h3 className="footer-heading mb-4">About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
            </div>
            <div className="col-md-3 ml-auto">
              <ul className="list-unstyled float-left mr-5">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Subscribes</a></li>
              </ul>
              <ul className="list-unstyled float-left">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Nature</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <div>
                <h3 className="footer-heading mb-4">Connect With Us</h3>
                <p>
                  <a href="#"><span className="icon-facebook pt-2 pr-2 pb-2 pl-0" /></a>
                  <a href="#"><span className="icon-twitter p-2" /></a>
                  <a href="#"><span className="icon-instagram p-2" /></a>
                  <a href="#"><span className="icon-rss p-2" /></a>
                  <a href="#"><span className="icon-envelope p-2" /></a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p>
                Copyright ©  All rights reserved | Powered by Reacstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;