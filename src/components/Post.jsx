
const Post = (props) => {
    return (
        <>
            <h3>title: {props.title}</h3>
            <p>id: {props.id}</p>
            <p>body: {props.body}</p>
            <p>userId: {props.userId}</p>
        </>
    )
}
export default Post;