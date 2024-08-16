import { useEffect, useState } from "react";
import Posts from "./posts";

const List = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await res.json();
            setPosts(json);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }


    return <div>
        {loading ? <h2>Loading...</h2> : <Posts posts={posts} />}
    </div>
}

export default List;