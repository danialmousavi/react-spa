import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditFormPost from "../../Components/Posts/EditFormPost";

const EditPost = () => {
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
        <div className="row">
          <div className="col-md-6">
            <h1>Edit post :</h1>
            {error ? error : ""}
            {loader && <div className="spinner-border" role="status"></div>}
            {post &&<EditFormPost post={post} />}
          </div>
        </div>
      </div>
    </>
  );
};
export default EditPost;
