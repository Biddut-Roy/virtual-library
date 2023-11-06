
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../Hooks/useAuth';
import Lottie from 'lottie-react';
import loading from "../../public/animation/loading.json"

const Private = ({ children }) => {
    const location = useLocation();
    const { user , loader } = useAuth()
    if (loader) {
       return <Lottie className=" mx-auto h-24 md:h-32 lg:h-96 w-10/12" animationData={loading} loop={true} />
    
    }
    if(user){
        return children;
    }
    return  <Navigate state={location.pathname} to={"/login"}></Navigate> ;
};

Private.propTypes = {
    children: PropTypes.node
  };

export default Private;