import { Box } from '@mui/material';
import { getWeatherImage } from 'utils/getWeatherInfo';

function WeatherIcon({ code, isDay }) {
    const iconUrl = getWeatherImage(code, isDay);
    return (
        <Box>
            <img src={iconUrl} alt='Weather Icon' />
        </Box>
    );
}

export default WeatherIcon;
