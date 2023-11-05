import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import PropTypes from 'prop-types';


const Borrowedcard = ({ borrowed }) => {

    const { name, rating, photo, author, currentDate, returnDate } = borrowed;
    
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
                    <Link><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Borrowedcard.propTypes = {
    borrowed: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        currentDate: PropTypes.string.isRequired,
        returnDate: PropTypes.string.isRequired,
    }).isRequired,
};

export default Borrowedcard;