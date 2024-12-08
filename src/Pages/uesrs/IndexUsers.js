import { useEffect, useState } from "react";
import ListUsers from "../../Components/users/ListsUsers";

const IndexUsers = () => {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
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
                <h1>users :</h1>
                {error?error:''}
                {loader&&<div className="spinner-border" role="status"></div>}
                {users&& <ListUsers users={users}/>}
            </div>
        </div>
    </>
  );
};
export default IndexUsers;
