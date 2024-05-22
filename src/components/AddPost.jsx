import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { addPost } from "../api/handlePosts";
import Post from "./Post";

const AddPost = () => {
    const [queryParams] = useSearchParams()
    const [post, setPost] = useState(null);
    useEffect(() => {
        console.log("params: ",queryParams);
        addPost(queryParams.get('title'),queryParams.get('body'), queryParams.get('userId')).then(
           (res) => setPost(res.data)
        )
    },[])
    return (
            post && 
            <Post title={post.title} id={post.id} body={post.body} userId={post.userId}/>
    )
}
export default AddPost;