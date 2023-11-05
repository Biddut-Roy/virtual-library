import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login and Register/Login";
import Register from "../Pages/Login and Register/Register";
import Add from "../Pages/Add page/Add";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/category')
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/addBook",
          element: <Add></Add>,
        },
      ],
    },
  ]);

  export default router;