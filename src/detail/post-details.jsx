import {
    Link,
} from "react-router-dom";
const PostDetails = ({ post, showLink = false }) => {
    return <div style={{ width: "70vw", backgroundColor: "purple", color: "white", padding: "16px", borderRadius: "10px", margin: "8px 0px", textAlign: "left" }}>
        {showLink ? <Link to={`/product/${post.id}`}><h2 style={{ margin: "8px 0px" }}>{post.title}</h2></Link> : <h2 style={{ margin: "8px 0px" }}>{post.title}</h2>}
        <p>{post.body}</p>
    </div>
}

export default PostDetails;