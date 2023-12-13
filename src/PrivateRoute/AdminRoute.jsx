import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import Lottie from "lottie-react";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import loading from "../../public/animation/loading.json"


const AdminRoute = ({children}) => {
    const location = useLocation();
    const { user , loader } = useAuth()
    const [isAdmin , isLoading] = useAdmin();


    if (loader || isLoading) {
        
       return<Lottie className=" mx-auto h-24 md:h-32 lg:h-96 w-10/12" animationData={loading} loop={true} />
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};
AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };


export default AdminRoute ;