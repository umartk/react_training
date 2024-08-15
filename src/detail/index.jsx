import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Form = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts/' + params.id).then(res => res.json()).then(res => {
            setPost(res)
            setLoading(false);
        })

    }, [])
    return <div style={{ padding: "20px", width: "100%", textAlign: "center", display: "flex", justifyContent: "center" }}>
        {loading ? <h2>Loading</h2> : <div>
            <div style={{ width: "70vw", backgroundColor: "purple", color: "white", padding: "16px", borderRadius: "10px", margin: "8px 0px", textAlign: "left" }} key={post.id}>
                <h2 style={{ margin: "8px 0px" }}>{post.title}</h2>
                <p>Post by : {post.userId}</p>
                <p>{post.body}</p>
            </div>
        </div>}
    </div>
}

export default Form;