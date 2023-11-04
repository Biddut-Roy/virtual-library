import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login and Register/Login";
import Register from "../Pages/Login and Register/Register";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);

  export default router;