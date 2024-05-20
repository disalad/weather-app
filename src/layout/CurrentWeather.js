import { Box, Typography } from '@mui/material';
import TimeZone from 'components/CurrentWeather/TimeZone';
import Temperature from 'components/CurrentWeather/Temperature';
import WeatherIcon from 'components/CurrentWeather/WeatherIcon';

function CurrentWeather() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography element='h2'>Current Weather</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    p: 1,
                    m: 1,
                    width: '100%',
                }}
            >
                <TimeZone />
                <Temperature />
                <WeatherIcon />
            </Box>
        </Box>
    );
}

export default CurrentWeather;
