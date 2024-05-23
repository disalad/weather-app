import { Box, Grid, Typography } from '@mui/material';
import TimeZone from 'components/CurrentWeather/TimeZone';
import Temperature from 'components/CurrentWeather/Temperature';
import WeatherIcon from 'components/CurrentWeather/WeatherIcon';

const StyledGridItem = ({ children }) => (
    <Grid item xs={4}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '5rem',
            }}
        >
            {children}
        </Box>
    </Grid>
);

function CurrentWeather() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0 0 2.5rem',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h2' sx={{ textAlign: 'center', margin: '0 0 0.8rem' }}>
                        CURRENT WEATHER
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <StyledGridItem>
                            <TimeZone />
                        </StyledGridItem>
                        <StyledGridItem>
                            <Temperature />
                        </StyledGridItem>
                        <StyledGridItem>
                            <WeatherIcon />
                        </StyledGridItem>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CurrentWeather;
