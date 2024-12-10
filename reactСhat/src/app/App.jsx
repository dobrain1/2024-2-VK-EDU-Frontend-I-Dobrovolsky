import { useReducer, createContext } from 'react'
import { AppRouter } from './router';
import './App.scss'

export const PageContext = createContext();

function App() {

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
