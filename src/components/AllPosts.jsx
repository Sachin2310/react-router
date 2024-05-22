import { useState, useEffect } from "react";
import { getAllPosts } from "../api/handlePosts";
import TitlePost from "./PostWithTitle";
const AllPosts = () => {
    const [allPosts, setAllPosts] = useState(null);
    useEffect (() => {
        getAllPosts().then((res) => {
            console.log("check ",res.data);
            setAllPosts(res.data);
        })
    }, [])

    return (
        allPosts && <>
            {
                allPosts.map((post) => {
                    return <TitlePost key={post.id} title={post.title} id={post.id}/>
                })
            }
        </>
    )
}
export default AllPosts;