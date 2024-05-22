import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/handlePosts";
import Post from "./Post";

const GetPost = () => {
    const [post, setPost] = useState(null);
    const params = useParams();
    useEffect(() => {
        getPost(params.id).then(
            (res) => setPost(res.data)
        );
    }, [])

    return (
        post && 
        <Post title={post.title} id={post.id} body={post.body} userId={post.userId}/>
    )
}
export default GetPost;