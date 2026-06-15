import React, { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import MainLayout from "../layouts/MainLayout"
import Public from "./protected/Public"
import Protected from "./protected/Protected"
import { axiosInstance } from "../config/axiosInstance"
import { addUser, removeUser } from "../state/authReducer"
import { useDispatch } from "react-redux"

const AppRoutes = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/api/auth/me")
        console.log(res.data.user)
        dispatch(addUser(res.data.user))
      } catch (error) {
        dispatch(removeUser())
        console.log("error in me api", error)
      }
    })()
  })

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Public />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },

            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <Protected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes
