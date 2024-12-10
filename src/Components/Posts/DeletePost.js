import { useState } from "react";
import Swal from "sweetalert2";

const DeletePost = ({ postID }) => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const handleDelete = () => {
    setLoader(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`, {
      method: "DELETE",
    })
      .then((res) => {
        setLoader(false);
        setError(null);
        Swal.fire({
          title: "delete",
          text: "Post deleted successfuly",
          icon: "success",
        });
      })
      .catch((err) => {
        setLoader(false);
        setError(err.message);
        Swal.fire({
            title: "delete",
            text: "Post not deleted ",
            icon: "warning",
          });
      });
  };
  return (
    <>
      <button onClick={handleDelete} className="btn  btn-danger me-4">
        {loader && <div className="spinner-border spinner-border-sm" role="status"></div>}
        Delete
      </button>
    </>
  );
};
export default DeletePost;
