import React, { useState } from 'react';
import API from "../utils/API";
import { toast } from 'react-toastify';

function Comment({ blogId, postNewComment }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    API.post(`/api/v1/blogs/${blogId}/comments`, {
      name,
      email,
      content
    }).then(res => {
      if (res.status === 201) {
        toast.success("Comment posted");

        setName("");
        setEmail("");
        setContent("");
        postNewComment();
      } else {
        toast.error("Something wrong, please check again");
      }
    }).catch(err => {
      toast.error("Something wrong, please check again");
    })
  }

  return (
    <div className="comment-form-wrap pt-5">
      <h3 className="mb-5">Leave a comment</h3>
      <form onSubmit={handleSubmit} className="p-5 bg-light">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            required
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            required
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="form-control"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Post Comment" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default Comment;