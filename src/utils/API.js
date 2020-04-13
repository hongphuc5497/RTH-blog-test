import axios from 'axios';

export default axios.create({
  baseURL: "https://hongphuc-blog-api.herokuapp.com",
  responseType: "json",
  headers: {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})