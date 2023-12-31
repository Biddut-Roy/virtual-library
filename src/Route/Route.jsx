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
import Update from "../Pages/updatepage/Update";
import Donate from "../Pages/Donate_Book/Donate";
import AdminRoute from "../PrivateRoute/AdminRoute";
import CheckDonation from "../Pages/Donate_Book/CheckDonation";
import HomePage from "../Pages/Room_Confarence/HomePage";
import Room from "../Pages/Room_Confarence/Room/Room";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch("https://virtual-library-eight.vercel.app/category")
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
          element: <AdminRoute><Add /></AdminRoute>,
        },
        {
          path: "/checkDonate",
          element: <AdminRoute><CheckDonation /></AdminRoute>,
        },
        {
          path: "/donate",
          element: <Private><Donate /></Private>,
        },
        {
          path: "/categoryCards/:category",
          element: <CategoryCards></CategoryCards>,
          loader:({params}) =>fetch(`https://virtual-library-eight.vercel.app/categorybooks/${params.category}`)
        },
        {
            path: "/details/:id",
            element: <Private><ViewDetails></ViewDetails></Private>,
            loader:({params}) =>fetch(`https://virtual-library-eight.vercel.app/details/${params.id}`)
        },
        {
            path:"/read/:id",
            element:<Private><ReedMore></ReedMore></Private>,
            loader:({params}) =>fetch(`https://virtual-library-eight.vercel.app/details/${params.id}`)
        },
        {
            path:"/allBook",
            element:<Private><Books></Books></Private>,

        },
        {
            path:"/borrowed",
            element:<Private><Borrow></Borrow></Private>
        },
        {
            path:"/update/:id",
            element:<Private><Update></Update></Private>,
            loader:({params}) =>fetch(`https://virtual-library-eight.vercel.app/details/${params.id}`)
        },

        //  call section 
        {
          path: "/conference",
          element:<Private><HomePage /></Private> ,
        },
        {
          path: "/conference/room/:roomID",
          element:<Private><Room /></Private>,
        },
      ],
    },
  ]);

  export default router;