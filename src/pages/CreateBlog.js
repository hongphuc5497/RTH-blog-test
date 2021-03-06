import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/auth";
import API from "../utils/API";
import { toast } from 'react-toastify';

function CreateBlog(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const { authToken } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    API.post('/api/v1/blogs',{
      title,
      description,
      body,
      image
    }, {
      headers: {
        "Authorization": `Bearer ${authToken}` 
      }
    }).then(res =>{
      if (res.status === 201) {
        toast.success("Blog created!");
        
        setTitle("");
        setDescription("");
        setBody("");
        setImage("");
        props.history.push("/");
      } else {
        toast.error("Something wrong, please check again");
      }
    }).catch(err =>{
      toast.error("Something wrong, please check again");
    })
  }

  return (
    <div className="site-wrap">
      <Header />

      <section className="site-section py-lg">
        <div className="container">
          <div className="row blog-entries element-animate">
            <div className="col-md-12 main-content">
              <form onSubmit={handleSubmit} className="p-5 bg-light">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="desc">Description</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="description" 
                    value={description}
                    required
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="body">Content</label>
                  <textarea 
                    name="body" 
                    id="body" 
                    cols={30} 
                    rows={10} 
                    className="form-control" 
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">URL Image</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="image" 
                    required
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" value="Create blog" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CreateBlog;