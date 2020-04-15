import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import API from "../utils/API";
import moment from "moment";

function Blog(props) {
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [isNewComment, setIsNewComment] = useState(false);
  const { blogId } = props.match.params;

  const postNewComment = () => setIsNewComment(!isNewComment);

  async function fetchBlog() {
    const res = await API.get(`/api/v1/blogs/${parseInt(blogId)}`);
    setBlog(res.data);
  }

  async function fetchComments() {
    const res = await API.get(`/api/v1/blogs/${parseInt(blogId)}/comments`);
    setComments(res.data);
  }

  useEffect(() => {
    if (Object.keys(blog).length === 0) {
      Promise.all([fetchBlog(), fetchComments()]);
    } else {
      fetchComments();
    }
  }, [isNewComment]);


  return (
    <div className="site-wrap">
      <Header />

      <div>
        <div className="site-cover site-cover-sm same-height overlay single-page" style={{ backgroundImage: 'url("images/img_2.jpg")' }}>
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="post-entry text-center">
                  <h1 className="mb-4">{blog.title}</h1>
                  <div className="post-meta align-items-center text-center">
                    <span className="d-inline-block mt-1">Created At &nbsp;-&nbsp;</span>
                    <span>{moment(blog.created_at).format("MMM Do, YYYY")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="site-section py-lg">
          <div className="container">
            <div className="row blog-entries element-animate">
              <div className="col-md-12 main-content">
                <div className="post-content-body">
                  {blog.body}                
                </div>

                <div className="pt-5">
                  <h3 className="mb-5">{comments.length} Comments</h3>
                  <ul className="comment-list">
                    {comments.map((comment, index) => (
                      <li key={index} className="comment">
                        <div className="comment-body">
                          <h3>{comment.name}</h3>
                          <div className="meta">{moment(comment.created_at).format('MMMM Do YYYY, h:mm a')}</div>
                          <p>{comment.content}</p>
                        </div>
                      </li>
                    ))
                    }
                  </ul>

                  <Comment 
                    blogId={parseInt(blogId)}
                    postNewComment={postNewComment}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Blog;