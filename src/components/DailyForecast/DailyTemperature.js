import { Box, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyTemperature({ temp }) {
    const {
        weatherData: { daily_units },
    } = useContext(WeatherContext);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ThermostatIcon />
            <Typography>{`${temp} ${daily_units.temperature_2m_max}`}</Typography>
        </Box>
    );
}

export default DailyTemperature;
