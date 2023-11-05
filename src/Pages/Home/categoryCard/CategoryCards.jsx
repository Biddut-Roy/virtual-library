import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";


const CategoryCards = () =>{

    const data = useLoaderData();
    return (
        <div className=" w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6 my-7">
            {
                data.map(item =><Cards item={item} key={item._id}></Cards>)
            }
        </div>
    );
};

export default CategoryCards;