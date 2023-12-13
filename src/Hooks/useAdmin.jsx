import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";



const useAdmin = () => {

    const {user , loader } = useAuth()

    const { data: isAdmin , isPending: isLoading } = useQuery({
        queryKey : [ user?.email , "isAdmin"],
        enabled: !loader,
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/api/users/admin/${user?.email}`)
            return res.data;
        }
    })
 return [isAdmin , isLoading]
};

export default useAdmin;