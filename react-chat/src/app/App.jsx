import { useState } from 'react'
import ChatListPage from '../pages/ChatListPage/ChatListPage'
import ChatPage from '../pages/ChatPage/ChatPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import './App.scss'

function App() {
  const [page, setPage] = useState("ChatListPage")

  return (
    <>
      {page === "ChatListPage" ? 
        <ChatListPage></ChatListPage> 
        : page === "ChatPage" ?
        <ChatPage></ChatPage> 
        :
        <ErrorPage></ErrorPage>
      } 
    </>
  )
}

export default App
