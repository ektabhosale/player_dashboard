import Axios from "axios";
import React, { useState, useEffect } from "react";
import axios from 'axios'

const Planets = () => {
  
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res=>{console.log(res);})
    .catch(err=>{
        console.log(err);
    })
  });

  return (
    <div>
      hii
    </div>
  );
};
export default Planets;