
const UserInput = () => {
    function handleChange (){

    }
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
}
export default UserInput;