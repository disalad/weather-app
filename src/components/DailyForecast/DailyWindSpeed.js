import AirIcon from '@mui/icons-material/Air';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyWindSpeed({ perc }) {
    const {
        weatherData: { daily_units },
    } = useContext(WeatherContext);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <AirIcon />
            <Typography>{`${perc}${daily_units.wind_speed_10m_max}`}</Typography>
        </Box>
    );
}

export default DailyWindSpeed;
