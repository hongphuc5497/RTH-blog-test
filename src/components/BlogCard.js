import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
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
          <p><Link to={`/blog/${blog.id}`}>Read More</Link></p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;