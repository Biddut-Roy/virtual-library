import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const createAxios = axios.create({
    baseURL:"https://virtual-library-eight.vercel.app",
    withCredentials: true,
})



const useAxios = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        createAxios.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('check a error check', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        alert('Sign-out successful.')
                    }).catch((error) => {
                        console.log(error.message);
                    });
                    navigate("/login")
            }
        })
    }, [logOut , navigate])

    return  createAxios ;
};

export default useAxios;