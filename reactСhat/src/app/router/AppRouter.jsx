import React from 'react'
import {ChatListPage, ChatPage, ErrorPage} from '../../pages'
import { createHashRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
    {
      element: <ChatListPage />,
      errorElement: <ErrorPage />,
      path: '/'
    },
    {
      element: <ChatPage />,
      errorElement: <ErrorPage />,
      path: '/chat/:chatId'
    },

]);

export const AppRouter = () => {
    return <RouterProvider router={router} />
}
