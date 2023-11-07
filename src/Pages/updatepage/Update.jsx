import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";



const Update = () => {
    const update = useLoaderData()
    const { name, author, photo,  category, rating: rtn, quantity ,_id: id } = update;



    const [rating, setRatings] = useState(rtn);

    const handleRatingChange = (newRating) => {
        setRatings(newRating);
    }

    const handelUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = parseInt(form.quantity.value);
        const author = form.Author.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const data = { name, author, photo,  category, rating, quantity }

        axios.patch(`https://virtual-library-eight.vercel.app/update/${id}`, data)
        .then((res) => {
          if(res.data.modifiedCount){
              toast.success('Book Update successful')
          }
        })
        .catch(error => console.error(error));
        console.log(data);
        form.reset();
    };


    return (
        <form onSubmit={handelUpdate} className="w-11/12 md:w-2/5 lg:w-1/3 mx-auto my-7">
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" defaultValue={name} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-950 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" name="quantity" defaultValue={quantity} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-950 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " min="0" required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity of the book</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="Author" defaultValue={author} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-950 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="photo" defaultValue={photo} id="floating_phone" className="block py-2.5 px-0 w-full text-smtext-gray-950 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Book img URL</label>
                </div>

            </div>
            
            {/* category model */}
            <div className="relative z-0 w-full mb-6 group grid grid-cols-2 gap-12 lg:grid-cols-2">
                <select name="category" defaultValue={category} id="category">
                    <option value="Programming">Programming</option>
                    <option value="Science">Science</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Historical">Historical</option>
                </select>

            </div>
            {/* TYPE */}
            {/* ratting */}
            <div className="relative z-0 w-full my-3 group">
                <span className=" text-2xl">Rating: </span>
                <ReactStars
                    name="rating"
                    count={5}
                    size={20}
                    color2={'#ffd700'}
                    value={rating}
                    onChange={handleRatingChange}
                />
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
           <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5">Update</button>
        </form>
    );
};

export default Update;