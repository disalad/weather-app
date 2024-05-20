import { Box, Typography } from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function CloudCover() {
    const {
        weatherData: { current, current_units },
    } = useContext(WeatherContext);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <CloudQueueIcon />
                <Typography>Clouds</Typography>
            </Box>
            <Box
                sx={{ margin: 'auto' }}
            >{`${current.cloud_cover} ${current_units.cloud_cover}`}</Box>
        </Box>
    );
}

export default CloudCover;
