import { useState } from 'react';
import NavBar from "./components/NavBar";
import "./App.css";
import Search from "./components/Search";
import Weather from './components/Weather';

function App() {
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = (city) => {
    setSearchCity(city);
  };

  return (
    <div id="App">
      <NavBar />
      <div id="app-content">
        <Search onSearch={handleSearch} />
        <Weather city={searchCity} />
      </div>
    </div>
  );
}

export default App;
