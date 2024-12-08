import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo fuga eos rerum mollitia facilis distinctio nesciunt
              cupiditate inventore deserunt reprehenderit esse quibusdam,
              asperiores nihil consequatur unde voluptates ipsum! Nisi, quidem.
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate aliquam quisquam dolorum omnis reprehenderit ab
              accusantium vel tempore non quasi quam aspernatur ratione impedit,
              maiores sequi dolor hic consectetur velit?
            </p>
            <Link className="btn btn-dark" to="/users">Users</Link>
            <Link className="btn btn-light" to="/posts">Posts</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
