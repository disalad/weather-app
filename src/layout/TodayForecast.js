import { Box, Typography } from '@mui/material';
import ForecastItem from 'components/TodayForecast/ForecastItem';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function TodayForecast() {
    const {
        weatherData: { hourly },
    } = useContext(WeatherContext);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography element='h2'>Today&#39;s Forecast</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    width: '100%',
                }}
            >
                {hourly.time.map((time, index) => {
                    const temp = hourly.temperature_2m[index];
                    const precipitation = hourly.precipitation_probability[index];
                    const weather_code = hourly.weather_code[index];
                    return (
                        <ForecastItem
                            time={time}
                            temp={temp}
                            precipitation={precipitation}
                            weather_code={weather_code}
                            key={index}
                        />
                    );
                })}
            </Box>
        </Box>
    );
}

export default TodayForecast;
