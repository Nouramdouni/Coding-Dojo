import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        id="city-data"
        placeholder="search city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
