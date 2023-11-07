import axios from "axios";
import BooksCard from "./BooksCard";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";






const Books = () => {
    const {user} = useAuth()
    const [data, setData] = useState([])
    const [sort, setSort] = useState(true);
    const [sortData, setSortData] = useState([])


    const email = user.email;

    const sorting = () => {
        setSort(!sort);
    }


    useEffect(()=>{
        axios.get(`https://virtual-library-eight.vercel.app/allBook/?email=${email}` , { withCredentials : true} )
        .then(res=>{
            setData(res.data)
        })
        .catch(error=>{
            // handle error
            console.log(error);
        })
    },[email])

// [{quantity :{$ge : 0}} ai logic kaj na korar jonno dabble time data get client site and server site] NOTE!
    useEffect(()=>{
        axios.get(`https://virtual-library-eight.vercel.app/sortBook/?email=${email}`, { withCredentials : true} )
        .then(res=>{
            setSortData(res.data)
        })
        .catch(error=>{
            // handle error
            console.log(error);
        })
    },[email])

    return (
        <div>

            <label className="swap btn btn-primary ml-5">
                <input onClick={sorting} type="checkbox" />
                <div className="btn btn-circle swap-on">All</div>
                <div className="btn btn-circle  swap-off">Available</div>
            </label>

            <div className=" w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6 my-7">
                {
                    sort?
                    data?.map((bookItem, idx) => <BooksCard books={bookItem} key={idx}></BooksCard>)
                    :
                    sortData?.map((bookItem, idx) => <BooksCard books={bookItem} key={idx}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Books;