import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import API from "../utils/API";
import { Button } from 'reactstrap';
import moment from 'moment';
import Pagination from 'react-js-pagination';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState(
    {
      "total_objects": 50,
      "per_page": 10,
      "total_pages": 10,
      "current_page": 1
    }
  );
  const [activePage, setActivePage] = useState(pagination.current_page);
  const [isSorted, setIsSorted] = useState(false);
  const [search, setSearch] = useState("");

  const newestBlogs = blogs

  async function fetchBlogs() {
    try {
      const res = await API.get('/api/v1/blogs');
      setBlogs(res.data.blogs);
      setPagination(res.data.meta.pagination);
    } catch (err) {
      console.log(err);
    }
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

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);

    const fetchBlogWithPaginate = async () => {
      const res = await API.get(`/api/v1/blogs?page=${pageNumber}`);

      setBlogs(res.data.blogs);
      setPagination(res.data.meta.pagination);
    }
    fetchBlogWithPaginate();
  }

  function handleDelete(id) {
    const cloneBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(cloneBlogs);
  }

  function handleSearch() {
    const fetchBlogWithSearch = async () => {
      const res = await API.get(`/api/v1/blogs/?q[title_or_description_or_body_cont]=${search}`)

      setBlogs(res.data.blogs);
      setPagination(res.data.meta.pagination);
    }
    fetchBlogWithSearch();
  }

  useEffect(() => {
    if (blogs.length === 0) {
      fetchBlogs();
    }
  }, [isSorted, blogs]);

  return (
    <div className="site-wrap">
      <Header />

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-4">
              <h2>Recent Blogs</h2>
            </div>
            <div className="form-group col-4 ">
              <input
                type="text"
                id="search"
                className="form-control"
                value={search}
                onChange={e => setSearch(e.target.value)}
                required
              />
            </div>
            <div className="col-4">
              <label htmlFor="search">
                <Button className="mr-1" onClick={handleSearch}>
                  Search
                </Button>
              </label>
              <Button color="info" onClick={sortNewestDate}>Newest</Button>
              <Button color="warning" className="ml-2" onClick={sortOldestDate}>Oldest</Button>
            </div>
          </div>
          {
            <div className="row">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  id={index}
                  blog={blog}
                  setIsBlogDelete={handleDelete}
                />
              ))
              }
            </div>

          }

          <div className="row text-center pt-5 border-top">
            <div className="col-md-12">
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                hideDisabled
                totalItemsCount={pagination.total_objects}
                itemsCountPerPage={6}
                activePage={activePage}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blogs;