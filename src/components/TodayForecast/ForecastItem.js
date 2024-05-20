import { Card, Box, Typography } from '@mui/material';
import { timestampToTime } from 'utils/formatDate';
import { getWeatherImage } from 'utils/getWeatherInfo';
import TodayTemperature from './TodayTemperature';
import TodayPrecipitation from './TodayPrecipitation';

function ForecastItem({ time, temp, precipitation, weather_code }) {
    const iconUrl = getWeatherImage(weather_code, 1);
    return (
        <Card sx={{ p: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component='h3'>{timestampToTime(time)}</Typography>
                <img src={iconUrl} alt='' />
                <TodayTemperature temp={temp} />
                <TodayPrecipitation perc={precipitation} />
            </Box>
        </Card>
    );
}

export default ForecastItem;
