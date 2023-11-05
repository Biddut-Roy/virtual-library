import { Outlet } from "react-router-dom";
import Navbar from "../Pages/staticPage/Navbar";
import Footer from "../Pages/staticPage/Footer";


const Root = () => {
    return (
        <div className=" lg:w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;