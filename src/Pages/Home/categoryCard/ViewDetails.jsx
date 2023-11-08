import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import Lottie from "lottie-react";
import loading from "../../../../public/animation/loading.json"
import { useQuery } from "@tanstack/react-query";



const ViewDetails = () => {
    const itemCard = useLoaderData()
    const { name, rating, photo, author, category, quantity, _id } = itemCard;
    const { user } = useAuth();
    const [currentQuentity, setCurrentQuentity] = useState(quantity)
    const [open , setOpen] = useState(true);
    const currentDate = new Date();
    const [returnDate, setReturnDate] = useState(new Date());
    const email = user.email;
    const displayName = user.displayName
    const qnt = currentQuentity - 1;
    const qnt1 = { qnt };
    const mainId = _id;



    const borrowData = {
        name,
        rating,
        photo,
        author,
        category,
        returnDate,
        currentDate,
        email,
        displayName,
        qnt,
        mainId
    }



    const { isPending, error, data: borrowed } = useQuery({
        queryKey: ['borrow'],
        queryFn: () =>
            fetch(`http://localhost:5000/borrows?email=${email}`,{ credentials: 'include'} )
                .then((res) => res.json())
    })

    if (isPending) return <Lottie className=" mx-auto h-24 md:h-32 lg:h-96 w-10/12" animationData={loading} loop={true} />
    if (error) return 'An error has occurred: ' + error.message




    const handelBorrow = () => {
        const isExit = borrowed?.find(borrow => borrow?.mainId === _id)
        if (!isExit) {
            axios.post('http://localhost:5000/borrow', borrowData , )
                .then(res => {
                    if (res.data.insertedId) {
                        setCurrentQuentity(currentQuentity - 1)
                        axios.patch(`http://localhost:5000/item-update/${_id}`, qnt1 , )
                            .then(() => {
                                toast.success('Book borrowed successfully')
                                setOpen(false)
                            })
                            .catch(error => console.error(error));
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else{
            toast.error("already borrow this Book")
        }

    }

    return (
        <div className=" w-10/12 mx-auto my-10 ">
            <div className="card card-side bg-base-100 shadow-xl">
                <div>
                    <figure><img className=" h-[320px] w-[200]" src={photo} alt="img" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h1>{author}</h1>
                    <h1>Category: {category}</h1>
                    <h1>Quantity : {currentQuentity}</h1>
                    <div className=' flex'>
                        <ReactStars
                            count={5}
                            size={20}
                            color2={'#ffd700'}
                            value={parseFloat(rating)}
                            edit={false}
                        />

                    </div>
                    <div className="card-actions justify-end">
                        {
                            currentQuentity == 0 ? <button onClick={() => document.getElementById('borrow').showModal()} className="btn btn-outline btn-success" disabled >Borrow</button>
                                :
                                <button onClick={() => document.getElementById('borrow').showModal()} onBlur={()=> setOpen(true)} className="btn btn-outline btn-success" >Borrow</button>
                        }
                        {
                            open ?
                            <dialog id="borrow" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className=" flex justify-around">
                                    <div>
                                        <h1>Return date</h1>
                                        <ReactDatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} />
                                    </div>
                                    <div>
                                        <button onClick={handelBorrow} className=" btn btn-ghost">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </dialog>
                        : " "
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/read/${_id}`}><button className="btn btn-primary">Read</button></Link>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default ViewDetails;