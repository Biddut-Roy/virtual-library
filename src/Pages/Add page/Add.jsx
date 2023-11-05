import Swal from "sweetalert2";



const Add = () => {


    const handelAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.Author.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const data = { name, author, photo, description, category, rating, quantity }
        console.log(data);
        // fetch("https://top-auto-category-53sj6su0h-biddut-roys-projects.vercel.app/models", {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: 'Success',
        //                 text: 'Product has been added successfully',
        //             })
        //         }
        //     })

        form.reset();
    };

    return (

        <form onSubmit={handelAdd} className="w-11/12 md:w-2/5 lg:w-1/3 mx-auto my-7">
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" name="quantity" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " min="0" required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity of the book</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="Author" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="photo" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Book img URL(270*180p)</label>
                </div>

            </div>
            <div className="relative z-0 w-full mb-6 group ">
                <input type="text" name="description" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            {/* category model */}
            <div className="relative z-0 w-full mb-6 group grid grid-cols-2 gap-12 lg:grid-cols-2">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Historical</span>
                        <input
                            type="radio"
                            name="category"
                            value="Historical"
                            id="Historical"
                            className="radio checked:bg-blue-500"
                            required

                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Science</span>
                        <input
                            type="radio"
                            name="category"
                            value="Science"
                            id="Science"
                            className="radio checked:bg-blue-500"
                            required

                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Programming</span>
                        <input
                            type="radio"
                            name="category"
                            value="Programming"
                            id="Programming"
                            className="radio checked:bg-blue-500"
                            required

                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Adventure</span>
                        <input
                            type="radio"
                            name="category"
                            value="Adventure"
                            id="Adventure"
                            className="radio checked:bg-blue-500"
                            required

                        />
                    </label>
                </div>

            </div>
            {/* TYPE */}
            {/* ratting */}
            <div className="relative z-0 w-full my-3 group">
                <span className=" text-2xl">Rating: </span>
                <div className="rating">
                    <input type="radio" name="rating" value="1" id="1" required className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" value="2" id="2" required className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" value="3" id="3" required className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" value="4" id="4" required className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" value="5" id="5" required className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5">Add Book</button>
        </form>

    );
};

export default Add;