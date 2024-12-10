import { useState } from "react";
import Swal from "sweetalert2";

const CreatePost = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
   const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title:title,
              body: body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setLoading(false);
                setError(null)
                Swal.fire({
                    title: "Thanks",
                    text: "Post created successfuly",
                    icon: "success"
                  });
            }).catch(err=>{
                setError(err.message);
                setLoading(false)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });
            })
        
   }
  return (
    <>
        <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <h2>Create Post:</h2>
                   <form onSubmit={(e)=>handleSubmit(e)}>
                   <div className="mb-3">
                        <label  className="form-label">Title</label>
                        <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control"  />
                        <div className="form-text text-danger">{title?'':'input is invalid'}</div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Body</label>
                        <textarea onChange={(e)=>setBody(e.target.value)} className="form-control" rows="3"></textarea>
                        <div className="form-text text-danger">{body?'':'input is invalid'}</div>

                    </div>
                    <button type="submit" className="btn btn-dark" disabled={title===''||body===''}>
                        {loading&&<div className="spinner-border spinner-border-sm me-2"></div>}                    
                        Create
                    </button>
                    {error&&<div className="fw-bold text-danger mt-2">{error}</div>}
                   </form>
              </div>
            </div>
        </div>
    </>
  );
};
export default CreatePost;
