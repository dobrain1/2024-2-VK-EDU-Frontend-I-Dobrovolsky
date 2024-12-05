import { useReducer, createContext } from 'react'
import {ChatListPage, ChatPage, ErrorPage} from '../pages'
import './App.scss'

function pageReducer(state, action) {
  
  switch (action.type) {
    case "NAVIGATE":
      return { path: action.path, params: action.params || {} };
    default:
      console.error("Unknown action type:", action.type);
      return state;
  }
}

export const PageContext = createContext();

function App() {
  const [page, dispatch] = useReducer(pageReducer, {path: "ChatListPage",params: {}});

  const routes = {
    ChatListPage: <ChatListPage />,
    ChatPage: <ChatPage chatID={page.params.chatId} />,
    default: <ErrorPage />,
  };

  return (
    <>
      <PageContext.Provider value={{ page: page, dispatch}}>
        {routes[page.path] || routes.default}
      </PageContext.Provider> 
    </>
  )
}

export default App
