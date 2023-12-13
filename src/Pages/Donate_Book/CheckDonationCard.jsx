import axios from 'axios';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const CheckDonationCard = ({ book , refetch }) => {
    const {category,  photo, author, name, _id } = book;

    const handelAccept = () => {
        const { rating, category, quantity, description, photo, author, name, _id } = book;
        const data = {
            rating,
            quantity,
            description,
            photo,
            author,
            name,
            category
        }

        axios.post('http://localhost:5000/books', data , { withCredentials: true })
            .then(function (response) {
                if (response.data.insertedId) {
                    axios.delete(`http://localhost:5000/DonateDelete/${_id}`, { withCredentials: true })
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: 'Book has been added successfully',
                            })
                            refetch()
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handelDelete = (id) => {
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
                axios.delete(`http://localhost:5000/DonateDelete/${id}`, { withCredentials: true })
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            toast.success('Book Do not Accept successful')
                            refetch()
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    }
    return (
        <div className=' w-10/12 mx-auto'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p> Author: {author} <br /> category: {category}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handelDelete(_id)} className="btn btn-sm btn-error">Delete</button>
                        <button onClick={()=>handelAccept(book)} className="btn btn-sm btn-primary">Accept</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


CheckDonationCard.propTypes = {
    book: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
    refetch: PropTypes.func.isRequired,
};

export default CheckDonationCard;
