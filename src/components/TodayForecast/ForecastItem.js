import { Card, Box, Typography } from '@mui/material';
import { timestampToTime } from 'utils/formatDate';
import { getWeatherImage } from 'utils/getWeatherInfo';
import TodayTemperature from './TodayTemperature';
import TodayPrecipitation from './TodayPrecipitation';

function ForecastItem({ time, temp, precipitation, weather_code }) {
    const iconUrl = getWeatherImage(weather_code, 1);
    return (
        <Card
            sx={{
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                '& > *': {
                    margin: 0,
                },
                padding: '0.25rem 0'
            }}
        >
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
