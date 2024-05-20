import { Box, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function WindSpeed() {
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
                <AirIcon />
                <Typography>Wind</Typography>
            </Box>
            <Box
                sx={{ margin: 'auto' }}
            >{`${current.wind_speed_10m} ${current_units.wind_speed_10m}`}</Box>
        </Box>
    );
}

export default WindSpeed;
