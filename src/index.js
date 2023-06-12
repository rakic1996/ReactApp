import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Clients from "./components/pages/Clients"
import DemoPage from "./components/pages/Demo-Page"

import "./scss/style.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DemoPage />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="content">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
  
)
