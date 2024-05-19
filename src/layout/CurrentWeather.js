import { Box, Typography } from '@mui/material';
import TimeZone from 'components/CurrentWeather/TimeZone';
import Temperature from 'components/CurrentWeather/Temperature';
import WeatherIcon from 'components/CurrentWeather/WeatherIcon';

function CurrentWeather({ data, timezone }) {
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
                <TimeZone timezone={timezone} date={data.time} />
                <Temperature
                    temp={data.temperature_2m}
                    code={data.weather_code}
                    isDay={data.is_day}
                />
                <WeatherIcon code={data.weather_code} isDay={data.is_day} />
            </Box>
        </Box>
    );
}

export default CurrentWeather;
