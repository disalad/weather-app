import { Box } from '@mui/material';
import { formatDate } from 'utils/formatDate';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function TimeZone() {
    const {
        weatherData: { current, city },
    } = useContext(WeatherContext);

    const formattedDate = formatDate(current.time);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <Box>{city}</Box>
            <Box>{formattedDate}</Box>
        </Box>
    );
}

export default TimeZone;
