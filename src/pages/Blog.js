import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

class Blog extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Header />

        <div>
          <div className="site-cover site-cover-sm same-height overlay single-page" style={{ backgroundImage: 'url("images/img_2.jpg")' }}>
            <div className="container">
              <div className="row same-height justify-content-center">
                <div className="col-md-12 col-lg-10">
                  <div className="post-entry text-center">
                    <span className="post-category text-white bg-success mb-3">Nature</span>
                    <h1 className="mb-4"><a href="#">The AI magically removes moving objects from videos.</a></h1>
                    <div className="post-meta align-items-center text-center">
                      <figure className="author-figure mb-0 mr-3 d-inline-block"><img src="images/person_1.jpg" alt="Image" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By Carrol Atkinson</span>
                      <span>&nbsp;-&nbsp; February 10, 2019</span>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro.</p>
                    <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo. Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.</p>
                    <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique ut? Aperiam vel aut, ex exercitationem eos consequuntur eaque culpa totam, deserunt, aspernatur quae eveniet hic provident ullam tempora error repudiandae sapiente illum rerum itaque voluptatem. Commodi, sequi.</p>
                    <div className="row mb-5 mt-5">
                      <div className="col-md-12 mb-4">
                        <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
                      </div>
                      <div className="col-md-6 mb-4">
                        <img src="images/img_2.jpg" alt="Image placeholder" className="img-fluid rounded" />
                      </div>
                      <div className="col-md-6 mb-4">
                        <img src="images/img_3.jpg" alt="Image placeholder" className="img-fluid rounded" />
                      </div>
                    </div>
                    <p>Quibusdam autem, quas molestias recusandae aperiam molestiae modi qui ipsam vel. Placeat tenetur veritatis tempore quos impedit dicta, error autem, quae sint inventore ipsa quidem. Quo voluptate quisquam reiciendis, minus, animi minima eum officia doloremque repellat eos, odio doloribus cum.</p>
                    <p>Temporibus quo dolore veritatis doloribus delectus dolores perspiciatis recusandae ducimus, nisi quod, incidunt ut quaerat, magnam cupiditate. Aut, laboriosam magnam, nobis dolore fugiat impedit necessitatibus nisi cupiditate, quas repellat itaque molestias sit libero voluptas eveniet omnis illo ullam dolorem minima.</p>
                    <p>Porro amet accusantium libero fugit totam, deserunt ipsa, dolorem, vero expedita illo similique saepe nisi deleniti. Cumque, laboriosam, porro! Facilis voluptatem sequi nulla quidem, provident eius quos pariatur maxime sapiente illo nostrum quibusdam aliquid fugiat! Earum quod fuga id officia.</p>
                    <p>Illo magnam at dolore ad enim fugiat ut maxime facilis autem, nulla cumque quis commodi eos nisi unde soluta, ipsa eius aspernatur sint atque! Nihil, eveniet illo ea, mollitia fuga accusamus dolor dolorem perspiciatis rerum hic, consectetur error rem aspernatur!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus magni explicabo id molestiae, minima quas assumenda consectetur, nobis neque rem, incidunt quam tempore perferendis provident obcaecati sapiente, animi vel expedita omnis quae ipsa! Obcaecati eligendi sed odio labore vero reiciendis facere accusamus molestias eaque impedit, consequuntur quae fuga vitae fugit?</p>
                  </div>
                  <div className="pt-5">
                    <p>Categories:  <a href="#">Food</a>, <a href="#">Travel</a>  Tags: <a href="#">#manila</a>, <a href="#">#asia</a></p>
                  </div>
                  <div className="pt-5">
                    <h3 className="mb-5">6 Comments</h3>
                    <ul className="comment-list">
                      <li className="comment">
                        <div className="vcard">
                          <img src="images/person_1.jpg" alt="Image placeholder" />
                        </div>
                        <div className="comment-body">
                          <h3>Jean Doe</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply rounded">Reply</a></p>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="vcard">
                          <img src="images/person_1.jpg" alt="Image placeholder" />
                        </div>
                        <div className="comment-body">
                          <h3>Jean Doe</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply rounded">Reply</a></p>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard">
                              <img src="images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                              <h3>Jean Doe</h3>
                              <div className="meta">January 9, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="#" className="reply rounded">Reply</a></p>
                            </div>
                            <ul className="children">
                              <li className="comment">
                                <div className="vcard">
                                  <img src="images/person_1.jpg" alt="Image placeholder" />
                                </div>
                                <div className="comment-body">
                                  <h3>Jean Doe</h3>
                                  <div className="meta">January 9, 2018 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><a href="#" className="reply rounded">Reply</a></p>
                                </div>
                                <ul className="children">
                                  <li className="comment">
                                    <div className="vcard">
                                      <img src="images/person_1.jpg" alt="Image placeholder" />
                                    </div>
                                    <div className="comment-body">
                                      <h3>Jean Doe</h3>
                                      <div className="meta">January 9, 2018 at 2:21pm</div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                      <p><a href="#" className="reply rounded">Reply</a></p>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="comment">
                        <div className="vcard">
                          <img src="images/person_1.jpg" alt="Image placeholder" />
                        </div>
                        <div className="comment-body">
                          <h3>Jean Doe</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply rounded">Reply</a></p>
                        </div>
                      </li>
                    </ul>
                    {/* END comment-list */}
                    <div className="comment-form-wrap pt-5">
                      <h3 className="mb-5">Leave a comment</h3>
                      <form action="#" className="p-5 bg-light">
                        <div className="form-group">
                          <label htmlFor="name">Name *</label>
                          <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="website">Website</label>
                          <input type="url" className="form-control" id="website" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea name="true" id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <input type="submit" defaultValue="Post Comment" className="btn btn-primary" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* END main-content */}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Blog;