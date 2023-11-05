import PropTypes from 'prop-types';

const Category = ({ item }) => {
    const { category, button, image } = item;
    return (
        <div className="card lg:w-10/12 mx-auto bg-base-100 shadow-xl image-full border-solid border-2 border-slate-800">
            <figure><img src={image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title mb-10">{category}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{button}</button>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    item: PropTypes.shape({
        category: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Category;