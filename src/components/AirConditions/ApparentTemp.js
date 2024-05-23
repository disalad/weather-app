import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';
import WeatherInfoTooltip from 'components/AirConditions/WeatherInfoTooltip ';

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
            <WeatherInfoTooltip type='Real Feel' />
            <Typography
                variant='h4'
                sx={{ margin: 'auto' }}
            >{`${current.apparent_temperature} ${current_units.apparent_temperature}`}</Typography>
        </Box>
    );
}

export default Temperature;
