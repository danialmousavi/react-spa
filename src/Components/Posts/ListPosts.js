import { Link } from "react-router-dom";

const ListPosts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div className="card col-md-5 m-1" key={post.id}>
        <div className="card-header">
        <Link to={`/posts/${post.id}`}>Title: {post.title}</Link>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Body: {post.body}</li>
        </ul>
      </div>
      ))}
    </>
  );
};
export default ListPosts;
