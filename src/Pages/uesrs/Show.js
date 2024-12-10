import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUsers = () => {
  const { Id } = useParams();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
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
          {user&&<div className="col-md-8" key={user.id}>
       
          <div className="card ">
            <div className="card-header fw-bold">
                <span>{user.name}</span>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">username: {user.username}</li>
              <li className="list-group-item">email: {user.email}</li>
              <li className="list-group-item">phone: {user.phone}</li>
              <li className="list-group-item">website: {user.website}</li>

            </ul>
          </div>
        </div>}
        </div>
      </div>
    </>
  );
};
export default ShowUsers;
