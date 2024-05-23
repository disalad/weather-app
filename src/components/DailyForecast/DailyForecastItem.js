import { Box, Typography, Grid } from '@mui/material';
import { getDayOfWeek } from 'utils/formatDate';
import { getWeatherImage } from 'utils/getWeatherInfo';
import DailyTemperature from 'components/DailyForecast/DailyTemperature';
import DailyPrecipitation from 'components/DailyForecast/DailyPrecipitation';
import DailyWindSpeed from './DailyWindSpeed';
import DailyApparentTemperature from './DailyApparentTemperature';

function DailyForecastItem({ time, temp, apparent_temp, precipitation, weather_code, wind_speed }) {
    const iconUrl = getWeatherImage(weather_code, 1);

    return (
        <Grid
            container
            xs={12}
            sx={{
                background:
                    'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                '& > *': {
                    margin: 0,
                },
            }}
        >
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                }}
            >
                <Typography component='h4' variant='h4' sx={{ marginRight: 1 }}>
                    {getDayOfWeek(time)}
                </Typography>
                <img
                    src={iconUrl}
                    alt=''
                    style={{ marginRight: 1, height: '2.35rem', width: '2.35rem' }}
                />
            </Grid>
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                }}
            >
                <DailyTemperature temp={temp} />
                <Box sx={{ height: '0.65rem' }} />
                <DailyApparentTemperature temp={apparent_temp} />
            </Grid>
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                }}
            >
                <DailyPrecipitation perc={precipitation} />
                <Box sx={{ height: '0.65rem' }} />
                <DailyWindSpeed perc={wind_speed} />
            </Grid>
        </Grid>
    );
}

export default DailyForecastItem;
