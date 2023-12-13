import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";



const useAdmin = () => {

    const {user , loader } = useAuth()

    const { data: isAdmin , isPending: isLoading } = useQuery({
        queryKey : [ user?.email , "isAdmin"],
        enabled: !loader,
        queryFn: async() =>{
            const res = await axios.get(`https://virtual-library-eight.vercel.app/api/users/admin/${user?.email}` , { withCredentials: true })
            return res.data;
        }
    })
 return [isAdmin , isLoading]
};

export default useAdmin;