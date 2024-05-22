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
                            maxWidth: { xs: '95%', sm: '80%', md: '1100px' },
                            width: '100%',
                            height: '100%',
                            margin: '0 auto',
                            padding: '1rem 0 3rem',
                            borderRadius: {
                                xs: 'none',
                                sm: '0 0 1rem 1rem',
                            },
                            boxShadow: {
                                xs: 'none',
                                sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
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
                </Box>
            )}
        </>
    );
}

export default WeatherLayouts;
