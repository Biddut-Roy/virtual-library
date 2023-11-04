import { useContext } from "react";
import { AuthContext } from "../AuthProvider/GlobalAuth";


const useAuth = () => {

    const auth = useContext(AuthContext)
    return auth 
}
export default useAuth;