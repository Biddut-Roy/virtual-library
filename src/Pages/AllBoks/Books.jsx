import BooksCard from "./BooksCard";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Books = () => {
    const allBooks = useLoaderData()
    const [data , setData] = useState(allBooks)
    const [sort, setSort] = useState(false);

    const sorting = () => {
        setSort(!sort)
    }

    if (sort) {
        const sortingData = data?.filter(quantity => quantity.quantity !== 0)
        setData(sortingData)
    }

console.log(sort);

    return (
        <div>

            <label className="swap">
                <input onClick={sorting} type="checkbox" />
                <div className="swap-on">Available</div>
                <div className="swap-off">All</div>
            </label>

            <div className=" w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6 my-7">
                {
                    data?.map((bookItem , idx) => <BooksCard books={bookItem} key={idx}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Books;