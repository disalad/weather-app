import { Box, Typography } from '@mui/material';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function Humidity() {
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
                <WaterDropOutlinedIcon />
                <Typography>Humidity</Typography>
            </Box>
            <Box
                sx={{ margin: 'auto' }}
            >{`${current.relative_humidity_2m} ${current_units.relative_humidity_2m}`}</Box>
        </Box>
    );
}

export default Humidity;
