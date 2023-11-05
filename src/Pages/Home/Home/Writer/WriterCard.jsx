import PropTypes from 'prop-types';

const WriterCard = ({ writer }) => {
    const { name, picture, details, dateOfBirth } = writer
    return (
        <div className="hero border-b-2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{details}</p>
                    <button className="btn btn-primary">{dateOfBirth}</button>
                </div>
            </div>
        </div>
    );
};
WriterCard.propTypes = {
    writer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
    }).isRequired,
}

export default WriterCard;