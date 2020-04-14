import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { Button } from 'reactstrap';
import API from "../utils/API";
import { toast } from 'react-toastify';

function BlogCard({ blog }) {
  const { authToken } = useAuth();

  function handleDeleteBlog(e) {
    e.preventDefault();

    API.delete(`/api/v1/blogs/${blog.id}`, {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }).then(res => {
      toast.success("Blog delete!");
    }).catch(err => 
      console.log(err)  
    )
  }

  return (
    <div className="col-lg-4 mb-4">
      <div className="entry2">
        <Link to={`/blog/${blog.id}`}>
          <img src="../assets/stylesheets/images/noimage.jpg" alt="Blog image" className="img-fluid rounded" />
        </Link>

        <div className="excerpt">
          <h2>{blog.title}</h2>
          <div className="post-meta align-items-center text-left clearfix">
            <span className="d-inline-block mt-1">Created At &nbsp;-&nbsp;</span>
            <span>{moment(blog.created_at).format("MMM Do, YYYY")}</span>
          </div>
          <p>{blog.description}</p>
          <p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </p>
          {
            authToken && (
              <div>
                <Button color="primary" >Edit</Button>
                <Button className="ml-2" onClick={handleDeleteBlog} >Delete</Button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default BlogCard;