import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getWeatherByCity } from '../services/weatherService';
import './Weather.css';

export default function Weather({ city }) {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWeather = async () => {
            if (!city) return;

            setLoading(true);
            setError('');

            try {
                const weatherData = await getWeatherByCity(city);
                setWeather(weatherData);
            } catch (error) {
                console.error('Weather fetch error:', error);
                setError('Weather data not found. Please try again.');
                setWeather(null);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    if (loading) {
        return <div>Loading weather data...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!weather) {
        return null;
    }

    return (
        <div className="weather-info">
            <h2>{weather.cityName}</h2>
            <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.description}
                className="weather-icon"
            />
            <div className="temperature">{Math.round(weather.temperature)}°C</div>
            <div className="description">{weather.description}</div>
            <div className="details">
                <div>Humidity: {weather.humidity}%</div>
                <div>Wind Speed: {weather.windSpeed} m/s</div>
            </div>
        </div>
    );
}

Weather.propTypes = {
    city: PropTypes.string
}; 