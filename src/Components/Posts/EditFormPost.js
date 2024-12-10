import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditFormPost=({post})=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e);
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
              title:title,
              body: body,
              userId: 1,
              id:post.id
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
                    text: "Post update successfuly",
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
    useEffect(()=>{
        setTitle(post.title)
        setBody(post.body)

    },[post])
    return(
        <>
          <form onSubmit={(e)=>handleSubmit(e)}>
                   <div className="mb-3">
                        <label  className="form-label">Title</label>
                        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="form-control"  />
                        <div className="form-text text-danger">{title?'':'input is invalid'}</div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Body</label>
                        <textarea onChange={(e)=>setBody(e.target.value)} value={body} className="form-control" rows="6"></textarea>
                        <div className="form-text text-danger">{body?'':'input is invalid'}</div>

                    </div>
                    <button type="submit" className="btn btn-dark" disabled={title===''||body===''}>
                        {loading&&<div className="spinner-border spinner-border-sm me-2"></div>}                    
                        Edit
                    </button>
                    {error&&<div className="fw-bold text-danger mt-2">{error}</div>}
                   </form>
        </>
    )
}
export default EditFormPost