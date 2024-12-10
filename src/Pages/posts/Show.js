import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DeletePost from "../../Components/Posts/DeletePost";
const ShowPosts = () => {
  const { Id } = useParams();
  const [post, setPost] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoader(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoader(false);
      });
  }, [Id]);
  return (
    <>
      <div className="container">
        <div className="row g-3">
          <h1>users :</h1>
          {error ? error : ""}
          {loader && <div className="spinner-border" role="status"></div>}
          {post && (
            <div className="card col-md-5 m-1" key={post.id}>
              <div className="card-header">Title: {post.title}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Body: {post.body}</li>
              </ul>
              <div className="card-footer">
                <DeletePost postID={post.id}/>
                <Link className="btn btn-dark" to={`/posts/edit/${Id}`}>Edit</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default ShowPosts;
