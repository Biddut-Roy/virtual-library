
import Borrowedcard from "./Borrowedcard";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";



const Borrow = () => {
    const { user } = useAuth();
    const email = user.email;
    const [borrowed , setBorrowed] = useState([]);
   
    useEffect(()=>{
        axios.get(`http://localhost:5000/borrow?email=${email}`)
        .then(res=>{
            setBorrowed(res.data)
        })
        .catch(error=>{
            // handle error
            console.log(error);
        })
    },[email]);




    return (
        <div className=" w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6 my-7">
            {
                borrowed?.map(borrow => <Borrowedcard borrowed={borrow} borroweds={borrowed} setBorroweds={setBorrowed} key={borrow._id}></Borrowedcard>)
            }

        </div>
    );
};

export default Borrow;