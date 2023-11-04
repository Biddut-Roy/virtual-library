import { Outlet } from "react-router-dom";
import Navbar from "../Pages/staticPage/Navbar";
import Footer from "../Pages/staticPage/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;