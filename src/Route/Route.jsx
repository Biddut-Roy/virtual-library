import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login and Register/Login";
import Register from "../Pages/Login and Register/Register";
import Add from "../Pages/Add page/Add";
import CategoryCards from "../Pages/Home/categoryCard/CategoryCards";
import ViewDetails from "../Pages/Home/categoryCard/ViewDetails";
import Private from "../PrivateRoute/Private";
import Error from "../Errorpage/Error";
import ReedMore from "../Pages/Home/categoryCard/ReedMore";
import Books from "../Pages/AllBoks/Books";
import Borrow from "../Pages/BorrowPage/Borrow";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
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
        {
          path: "/categoryCards/:category",
          element: <CategoryCards></CategoryCards>,
          loader:({params}) =>fetch(`http://localhost:5000/categorybooks/${params.category}`)
        },
        {
            path: "/details/:id",
            element: <Private><ViewDetails></ViewDetails></Private>,
            loader:({params}) =>fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
            path:"/read",
            element:<ReedMore></ReedMore>
        },
        {
            path:"/allBook",
            element:<Books></Books>
        },
        {
            path:"/borrowed",
            element:<Private><Borrow></Borrow></Private>
        }
      ],
    },
  ]);

  export default router;