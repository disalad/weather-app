import { Box } from '@mui/material';
import { getWeatherDescription } from 'utils/getWeatherInfo';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function Temperature() {
    const {
        weatherData: { current },
    } = useContext(WeatherContext);

    const weatherDescription = getWeatherDescription(current.weather_code, current.is_day);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <Box>{current.temperature_2m}</Box>
            <Box>{weatherDescription}</Box>
        </Box>
    );
}

export default Temperature;
