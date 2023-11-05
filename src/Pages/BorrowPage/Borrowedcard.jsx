import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import PropTypes from 'prop-types';


const Borrowedcard = ({borrowed}) => {

    const {name, rating, photo, author} = borrowed;

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
                    value={rating}
                    edit={false}
                    />
                    
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
      rating: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Borrowedcard;