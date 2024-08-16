import PostDetails from "../detail/post-details";

const Posts = ({ posts }) => {
    console.log({ posts })
    return <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center" }}>
        {posts.map(post => {
            return <PostDetails post={post} key={post.id} showLink={true} />
        })}
    </div>
}

export default Posts;