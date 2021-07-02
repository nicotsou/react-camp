import PropTypes from 'prop-types';

const TvShowItem = ({ id, favorites, name, rating, posterSrc, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{
        fontWeight: favorites.some((favoriteId) => favoriteId === id)
          ? 'bold'
          : '',
      }}
    >
      <img
        width={50}
        src={`https://image.tmdb.org/t/p/w500/${posterSrc}`}
        alt={name}
      />{' '}
      {name}, Rating: {rating}
    </li>
  );
};

TvShowItem.propTypes = {
  id: PropTypes.number,
  favorites: PropTypes.array,
  name: PropTypes.string,
  rating: PropTypes.number,
  posterSrc: PropTypes.string,
  onClick: PropTypes.func,
};

export default TvShowItem;
