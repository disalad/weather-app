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
                sx={{
                    fontWeight: { xs: '400', sm: '500' },
                    fontSize: { xs: '13px', sm: '15px' },
                    paddingLeft: { xs: '0px', sm: '4px', md: '6px' },
                }}
                variant='h5'
            >{`${temp} ${hourly_units.temperature_2m}`}</Typography>
        </Box>
    );
}

export default TodayTemperature;
