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
                background:
                    'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow:
                    'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                padding: '0.3rem 0',
                color: '#ffffff',
                mt: { xs: '1rem', sm: 0 },
                '& > *': {
                    margin: 0,
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography variant='h4'>{timestampToTime(time)}</Typography>
                <img src={iconUrl} alt='' />
                <TodayTemperature temp={temp} />
                <TodayPrecipitation perc={precipitation} />
            </Box>
        </Card>
    );
}

export default ForecastItem;
