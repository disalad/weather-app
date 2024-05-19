import { Box, Typography } from '@mui/material';
import ForecastItem from 'components/TodayForecast/ForecastItem';

function TodayForecast({ data: hourlyData, units }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography element='h2'>Today's Forecast</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    width: '100%',
                }}
            >
                {hourlyData.time.map((time, index) => {
                    const temp = hourlyData.temperature_2m[index];
                    const precipitation = hourlyData.precipitation_probability[index];
                    const weather_code = hourlyData.weather_code[index];
                    return (
                        <ForecastItem
                            time={time}
                            temp={temp}
                            precipitation={precipitation}
                            weather_code={weather_code}
                            units={units}
                        />
                    );
                })}
            </Box>
        </Box>
    );
}

export default TodayForecast;
