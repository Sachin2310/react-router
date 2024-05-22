import { Link } from "react-router-dom";

const TitlePost = (props) => {
    return (
        <Link to={`/post/${props.id}`}><h3>{props.title}</h3></Link>
    )
}
export default TitlePost;