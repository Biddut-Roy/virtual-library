import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'




const Cards = ({ item }) => {

    const { name, rating, photo, author , _id } = item;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div>
                <figure><img className=" h-[320px] w-[200px]" src={photo} alt="img" /></figure>
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
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default Cards;
