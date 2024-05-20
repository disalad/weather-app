import { Box, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function Temperature() {
    const {
        weatherData: { current, current_units },
    } = useContext(WeatherContext);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <ThermostatIcon />
                <Typography>Real Feel</Typography>
            </Box>
            <Box
                sx={{ margin: 'auto' }}
            >{`${current.apparent_temperature} ${current_units.apparent_temperature}`}</Box>
        </Box>
    );
}

export default Temperature;
