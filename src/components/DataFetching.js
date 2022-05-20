import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idBtn, setIdBtn] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
      .then((res) => {
        console.log(res);
        // setPosts(() => {
        //     return res.data;
        //   });

        setPost(() => {
          return res.data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idBtn]);

  let handleChange = (event) => {
    setId(() => {
      return event.target.value;
    });
  };

  let handleClick = () => {
    setIdBtn(() => {
      return id;
    });
  };

  return (
    <div>
      <input type="text" value={id} onChange={handleChange}></input>
      <button type="button" onClick={handleClick}>
        Fetch
      </button>
      <p>{post.title}</p>
      {/* <ul>
        {posts.map((eachPost) => (
          <li key={eachPost.id}>{eachPost.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
