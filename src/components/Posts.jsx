import Card from "./Card";
const Posts = () => {
    return (
        <>
            <Card body="All posts" functionality="allPosts"/>
            <Card body="Get post with id" functionality="getPost"/>
            <Card body="Add post" functionality="addPost"/>
        </>
    )
}
export default Posts;