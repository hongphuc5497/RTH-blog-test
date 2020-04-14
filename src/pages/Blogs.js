import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import API from "../utils/API";
import { Button } from 'reactstrap';
import moment from 'moment';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  async function fetchBlogs() {
    const res = await API.get('/api/v1/blogs');
    setBlogs(res.data.blogs);
  }

  function sortNewestDate() {
    const sortedAscDate = [...blogs].sort((a, b) => moment(b.created_at).format('YYYYMMDD') - moment(a.created_at).format('YYYYMMDD'));

    setBlogs(sortedAscDate);
    setIsSorted(!isSorted);
  }

  function sortOldestDate() {
    const sortedDescDate = [...blogs].sort((a, b) => moment(a.created_at).format('YYYYMMDD') - moment(b.created_at).format('YYYYMMDD'));

    setBlogs(sortedDescDate);
    setIsSorted(!isSorted);
  }

  useEffect(() => {
    if (blogs.length == 0) {
      fetchBlogs();
    }
  }, [isSorted]);

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
            <div className="col-4">
              <h2>Recent Posts</h2>
            </div>
            <div className="col-4 offset-4 text-right">
              <Button color="info" onClick={sortNewestDate}>Newest</Button>
              <Button color="warning" className="ml-2" onClick={sortOldestDate}>Oldest</Button>
            </div>
          </div>
          {
            <div className="row">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  blog={blog}
                />
              ))
              }
            </div>

          }

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

export default Blogs;