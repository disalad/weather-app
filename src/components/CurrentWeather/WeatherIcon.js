import { Box } from '@mui/material';
import { getWeatherImage } from 'utils/getWeatherInfo';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function WeatherIcon() {
    const {
        weatherData: { current },
    } = useContext(WeatherContext);

    const iconUrl = getWeatherImage(current.weather_code, current.is_day);

    return (
        <Box>
            <img src={iconUrl} alt='Weather Icon' />
        </Box>
    );
}

export default WeatherIcon;
