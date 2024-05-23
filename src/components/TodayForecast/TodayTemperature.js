import { Box, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function TodayTemperature({ temp }) {
    const {
        weatherData: { hourly_units },
    } = useContext(WeatherContext);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ThermostatIcon />
            <Typography
                sx={{ paddingLeft: { xs: '0px', sm: '4px', md: '6px' } }}
                variant='h4'
            >{`${temp} ${hourly_units.temperature_2m}`}</Typography>
        </Box>
    );
}

export default TodayTemperature;
