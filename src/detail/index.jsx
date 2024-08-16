import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetails from "./post-details";
const Form = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadPost();
    }, [])

    const loadPost = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
            const json = await res.json();
            setPost(json);
            setLoading(false);
        }
        catch (e) {
            setLoading(false);
        }
    }
    return <div style={{ padding: "20px", width: "100%", textAlign: "center", display: "flex", justifyContent: "center" }}>
        {loading ? <h2>Loading</h2> : <div>
            <PostDetails post={post} />
        </div>}
    </div>
}

export default Form;