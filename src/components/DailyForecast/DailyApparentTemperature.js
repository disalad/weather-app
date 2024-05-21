import { Box, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyApparentTemperature({ temp }) {
    const {
        weatherData: { daily_units },
    } = useContext(WeatherContext);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <WbSunnyIcon />
            <Typography>{`${temp} ${daily_units.apparent_temperature_max}`}</Typography>
        </Box>
    );
}

export default DailyApparentTemperature;
