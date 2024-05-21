import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyPrecipitation({ perc }) {
    const {
        weatherData: { daily_units },
    } = useContext(WeatherContext);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ThunderstormIcon />
            <Typography>{`${perc}${daily_units.precipitation_probability_max}`}</Typography>
        </Box>
    );
}

export default DailyPrecipitation;
