import { useNavigate } from "react-router-dom";
import "../css/components.css";
import { useState } from "react";

const Card = (props) => {
    const navigate = useNavigate();
    const customizeCard = (functionality) => {
        const initialValue = {
            id: 0,
            title: "",
            userId: 0,
            body: ""
        }
        const [data, setData] = useState(initialValue);
        function handleChange (e) {
            setData({
                ...data, [e.target.name]: e.target.value
            });
        }
        function handleClick (e) {
            let Url = `/post`;
            if(e.target.innerHTML=="get post"){
                Url = Url + `/${data.id}`;
            } else if(e.target.innerHTML=="add post") {
                Url = Url + `?title=${data.title}&body=${data.body}&userId=${data.userId}`
            } else if(e.target.innerHTML=="all posts") {
                Url = Url + '/all';
            }
            navigate(Url);
        }
        if(functionality=="getPost"){
            return (
                <>
                    <label htmlFor="html">Id: </label>
                    <input type="text" id="id" name="id" onChange={handleChange}></input><br/>
                    <button onClick={handleClick}>get post</button>
                </>
            )
        } else if(functionality=="addPost"){
            return (
                <>
                    <label htmlFor="html">Title: </label>
                    <input type="text" id="title" name="title" onChange={handleChange}></input><br/>
                    <label htmlFor="html">UserId: </label>
                    <input type="text" id="userId" name="userId" onChange={handleChange}></input><br/>
                    <label htmlFor="html">Body: </label>
                    <input type="text" id="body" name="body" onChange={handleChange}></input><br/>
                    <button onClick={handleClick}>add post</button>
                </>
            )
        } else if(functionality=="allPosts"){
            return (
                <button onClick={handleClick}>all posts</button>
            )
        }
    }
    return (
        <div className="card">
            <h2>{props.body}</h2>
            {customizeCard(props.functionality)}
        </div>
    )
}
export default Card;