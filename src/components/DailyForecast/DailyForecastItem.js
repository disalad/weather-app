import { Card, Box, Typography } from '@mui/material';
import { getDayOfWeek } from 'utils/formatDate';
import { getWeatherImage } from 'utils/getWeatherInfo';
import DailyTemperature from 'components/DailyForecast/DailyTemperature';
import DailyPrecipitation from 'components/DailyForecast/DailyPrecipitation';
import DailyWindSpeed from './DailyWindSpeed';
import DailyApparentTemperature from './DailyApparentTemperature';

function DailyForecastItem({ time, temp, apparent_temp, precipitation, weather_code, wind_speed }) {
    const iconUrl = getWeatherImage(weather_code, 1);

    return (
        <Card sx={{ p: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Typography component='h3'>{getDayOfWeek(time)}</Typography>
                <img src={iconUrl} alt='' />
                <DailyTemperature temp={temp} />
                <DailyApparentTemperature temp={apparent_temp} />
                <DailyPrecipitation perc={precipitation} />
                <DailyWindSpeed perc={wind_speed} />
            </Box>
        </Card>
    );
}

export default DailyForecastItem;
