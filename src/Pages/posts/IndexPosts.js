import { useEffect, useState } from "react";
import ListPosts from "../../Components/Posts/ListPosts";
import { Link } from "react-router-dom";


const IndexPosts = () => {
  const [posts, setPosts] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoader(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoader(false);
      });
  }, []);
  return (
    <>
        <div className="container">
            <div className="row g-3">
                <h1>Posts :</h1>
                <div>
                  <Link className="btn btn-dark" to="/posts/create">create post</Link>
                </div>
                {error?error:''}
                {loader&&<div className="spinner-border" role="status"></div>}
                {posts&& <ListPosts posts={posts}/>}
            </div>
        </div>
    </>
  );
};
export default IndexPosts;
