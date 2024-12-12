import React from 'react'
import {ChatListPage, ChatPage, ErrorPage, EditProfilePage} from '../../pages'
import { createHashRouter, RouterProvider } from "react-router-dom";

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
    {
      element: <EditProfilePage />,
      errorElement: <ErrorPage />,
      path: '/profile/edit'
      // path: '/profile/edit/:profileId'
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />
}
