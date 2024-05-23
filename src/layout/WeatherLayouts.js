import CurrentWeather from 'layout/CurrentWeather';
import AirConditions from 'layout/AirConditions';
import TodayForecast from 'layout/TodayForecast';
import DailyForecast from 'layout/DailyForecast';
import LoadingScreen from 'components/Layout/LoadingScreen';
import { Box, Grid } from '@mui/material';
import { WeatherContext } from 'context/WeatherContext';
import { useContext } from 'react';

function WeatherLayouts() {
    const { loading } = useContext(WeatherContext);
    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <Box
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            maxWidth: { xs: '100%', sm: '85%', md: '1100px' },
                            width: '100%',
                            height: '100%',
                            margin: { xs: '0 auto 2rem auto', md: '0 auto' },
                            padding: '2rem 0 3rem',
                            borderRadius: {
                                xs: 'none',
                                sm: '1rem',
                            },
                            boxShadow: {
                                xs: 'none',
                                sm: 'rgba(200, 200, 200, 0.3) 0px 1px 2px 0px, rgba(200, 200, 200, 0.15) 0px 1px 3px 1px',
                            },
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                            display='flex'
                            flexDirection='column'
                            justifyContent='space-between'
                        >
                            <CurrentWeather />
                            <AirConditions />
                            <TodayForecast />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DailyForecast />
                        </Grid>
                    </Grid>
                    <Box
                        sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, height: '2rem' }}
                    />
                </Box>
            )}
        </>
    );
}

export default WeatherLayouts;
