import { Typography, Grid } from '@mui/material';
import DailyForecastItem from 'components/DailyForecast/DailyForecastItem';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyForecast() {
    const {
        weatherData: { daily },
    } = useContext(WeatherContext);
    console.log(daily.time);

    return (
        <Grid
            container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                variant='h2'
                element='h2'
                sx={{ margin: { xs: '3rem 0 1rem 0', sm: '3rem 0 1rem 0', md: '0 0 0.8rem' } }}
            >
                DAILY FORECAST
            </Typography>
            <Grid
                container
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '100%',
                    paddingRight: { xs: '0.65rem', sm: '0.65rem', md: '2rem' },
                    paddingLeft: { xs: '0.65rem', sm: '0.65rem', md: '2rem' },
                }}
                gap={{ xs: '0.4rem', sm: '0.25rem' }}
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
            </Grid>
        </Grid>
    );
}

export default DailyForecast;
