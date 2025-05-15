const API_KEY = 'fe824cb856a37281c8c13e7a5fbbd488';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (cityName) => {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error('Weather data not found');
        }

        const data = await response.json();
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            cityName: data.name,
            icon: data.weather[0].icon,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}; 