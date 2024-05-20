import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function TodayPrecipitation({ perc }) {
    const {
        weatherData: { hourly_units },
    } = useContext(WeatherContext);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ThunderstormIcon />
            <Typography>{`${perc}${hourly_units.precipitation_probability}`}</Typography>
        </Box>
    );
}

export default TodayPrecipitation;
