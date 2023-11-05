import PropTypes from 'prop-types';
import ReactStars from 'react-stars'




const Cards = ({ item }) => {

    const { name, rating, photo, author } = item;
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
                        />
                        
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
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
    }).isRequired,
};

export default Cards;
