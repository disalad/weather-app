import { Box, Typography } from '@mui/material';
import DailyForecastItem from 'components/DailyForecast/DailyForecastItem';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyForecast() {
    const {
        weatherData: { daily },
    } = useContext(WeatherContext);
    console.log(daily.time);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography element='h2'>Weekly Forecast</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    flexDirection: 'column',
                    width: '100%',
                }}
            >
                {daily.time.map((time, index) => {
                    const temp = daily.temperature_2m_max[index];
                    const apparent_temp = daily.apparent_temperature_max[index];
                    const precipitation = daily.precipitation_probability_max[index];
                    const weather_code = daily.weather_code[index];
                    const wind_speed = daily.wind_speed_10m_max[index];
                    return (
                        <DailyForecastItem
                            key={index}
                            time={time}
                            temp={temp}
                            apparent_temp={apparent_temp}
                            precipitation={precipitation}
                            weather_code={weather_code}
                            wind_speed={wind_speed}
                        />
                    );
                })}
            </Box>
        </Box>
    );
}

export default DailyForecast;
