import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

class Blogs extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Header />

        <div className="site-section bg-light">
          <div className="container">
            <div className="row align-items-stretch retro-layout-2">
              <div className="col-md-4">
                <a href="single.html" className="h-entry mb-30 v-height gradient" style={{ backgroundImage: 'url("images/img_1.jpg")' }}>
                  <div className="text">
                    <h2>The AI magically removes moving objects from videos.</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
                <a href="single.html" className="h-entry v-height gradient" style={{ backgroundImage: 'url("images/img_2.jpg")' }}>
                  <div className="text">
                    <h2>The AI magically removes moving objects from videos.</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="single.html" className="h-entry img-5 h-100 gradient" style={{ backgroundImage: 'url("images/img_v_1.jpg")' }}>
                  <div className="text">
                    <div className="post-categories mb-3">
                      <span className="post-category bg-danger">Travel</span>
                      <span className="post-category bg-primary">Food</span>
                    </div>
                    <h2>The AI magically removes moving objects from videos.</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="single.html" className="h-entry mb-30 v-height gradient" style={{ backgroundImage: 'url("images/img_3.jpg")' }}>
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
                <a href="single.html" className="h-entry v-height gradient" style={{ backgroundImage: 'url("images/img_4.jpg")' }}>
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <h2>Recent Posts</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-secondary mb-3">Politics</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-success mb-3">Nature</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-warning mb-3">Travel</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-secondary mb-3">Politics</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-success mb-3">Nature</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_4.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-danger mb-3">Sports</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-success mb-3">Nature</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-danger mb-3">Sports</span>
                    <span className="post-category text-white bg-secondary mb-3">Tech</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html"><img src="images/img_4.jpg" alt="Image" className="img-fluid rounded" /></a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-danger mb-3">Sports</span>
                    <span className="post-category text-white bg-warning mb-3">Lifestyle</span>
                    <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                      <span>&nbsp;-&nbsp; July 19, 2019</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center pt-5 border-top">
              <div className="col-md-12">
                <div className="custom-pagination">
                  <span>1</span>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <span>...</span>
                  <a href="#">15</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Blogs;