import ReactStars from "react-stars";
import PropTypes from 'prop-types';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";



const Borrowedcard = ({ borrowed, setBorroweds, borroweds }) => {

    const { name, rating, photo, author, currentDate, returnDate, qnt: quantity, _id, mainId } = borrowed;
    const qnt = quantity + 1;
    const qnt1 = { qnt };

    const dateTime = new Date(currentDate);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const day = dateTime.getDate();
    const current = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;


    const returnDateTime = new Date(returnDate);
    const returnY = returnDateTime.getFullYear();
    const returnMonth = returnDateTime.getMonth() + 1;
    const returnDay = returnDateTime.getDate();
    const returnDates = `${returnY}-${returnMonth.toString().padStart(2, '0')}-${returnDay.toString().padStart(2, '0')}`;


    const handelDelete = (id, mainId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Return it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/borrow/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            axios.patch(`http://localhost:5000/item-update/${mainId}`, qnt1)
                                .then((res) => {
                                    if (res.data.modifiedCount > 0) {
                                        const remaining = borroweds.filter(booking => booking._id !== id);
                                        setBorroweds(remaining)
                                        toast.success('Book Return successful')
                                    }
                                })
                                .catch(error => console.error(error));
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });

    }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div>
                <figure><img className=" h-[320px] w-[200]" src={photo} alt="img" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h1>{author}</h1>
                <div className=' flex'>
                    <ReactStars
                        count={5}
                        size={20}
                        color2={'#ffd700'}
                        value={parseFloat(rating)}
                        edit={false}
                    />

                </div>
                <div>
                    <h1>Borrowed date: {current}</h1>
                    <h1>Return date date: {returnDates}</h1>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handelDelete(_id, mainId)} className="btn btn-primary">Return</button>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

Borrowedcard.propTypes = {
    borrowed: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        currentDate: PropTypes.string.isRequired,
        returnDate: PropTypes.string.isRequired,
        qnt: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
        mainId: PropTypes.string.isRequired,

    }).isRequired,
    setBorroweds: PropTypes.func.isRequired,
    borroweds: PropTypes.array.isRequired,
};

export default Borrowedcard;