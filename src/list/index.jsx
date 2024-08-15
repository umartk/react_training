import { useEffect, useState } from "react";
import {
    Link,
} from "react-router-dom";
const List = () => {
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => {
            setPost(res)
            setLoading(false)
        })

    }, [])


    return <div>
        {loading ? <h2>Loading...</h2> : <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center" }}>
            {posts.map(post => {
                return <div style={{ width: "70vw", backgroundColor: "purple", color: "white", padding: "16px", borderRadius: "10px", margin: "8px 0px", textAlign: "left" }} key={post.id}>
                    <Link to={`/product/${post.id}`}><h2 style={{ margin: "8px 0px" }}>{post.title}</h2></Link>
                    <p>{post.body}</p>
                </div>
            })}
        </div>}
    </div>
}

export default List;