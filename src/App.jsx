import './css/App.css'
import AllPosts from './components/AllPosts'
import GetPost from './components/GetPost'
import { useEffect } from 'react'
import { addPost } from './api/handlePosts'

function App() {

  return (
    <>
      <Posts/>
    </>
  )
}

export default App
