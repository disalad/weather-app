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
                height: '100%',
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
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h2' sx={{ textAlign: 'center' }}>
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
