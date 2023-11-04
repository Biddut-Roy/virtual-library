import { Outlet } from "react-router-dom";
import Navbar from "../Pages/staticPage/Navbar";
import Footer from "../Pages/staticPage/Footer";


const Root = () => {
    return (
        <div className=" max-w-[1200px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;