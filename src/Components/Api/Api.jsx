import React, { useEffect, useState } from "react";
import styles from "./Api.module.css";

const Api = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts.slice(0, 10).map((post) => (
        <div key={post.id} className={styles.post}>
          <h2>Title : {post.title}</h2>
          <p>Description : {post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Api;
