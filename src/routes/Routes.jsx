import {BrowserRouter, Routes, Route} from "react-router-dom";
import GetPost from "../components/GetPost";
import AllPosts from "../components/AllPosts";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost"

const CreateRouter = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path="/post/:id" element={<GetPost/>}/>
                <Route path="/post" element={<AddPost/>}/>
                <Route path="/post/all" element={<AllPosts/>}/>
            </Routes>
            {/* {props.children} */}
        </BrowserRouter>
    )
}
export default CreateRouter;