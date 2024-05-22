import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/posts`,
    headers:{
        'Content-type': 'application/json'
    }
})

export const getAllPosts = async () => {
    try {
        return await axiosClient.get(``);
    } catch (err) {
        // Handle errors
        console.error("err", err);
    }
}

export const getPost = async (id) => {
    try {
        return await axiosClient.get(`/`+id);
    } catch (err) {
        console.log("err", err);
    }
}

export const addPost = async (setTitle, setBody, setUserId) => {
    const body = {
        title: setTitle,
        body: setBody,
        userId: setUserId
    }
    try{
        return await axiosClient.post(``, body);
    } catch (err) {
        console.log("err", err);
    }
}