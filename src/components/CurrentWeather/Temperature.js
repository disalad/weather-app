import { Box } from '@mui/material';
import { getWeatherDescription } from 'utils/getWeatherInfo';

function Temperature({ temp, code, isDay }) {
    const weatherDescription = getWeatherDescription(code);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <Box>{temp}</Box>
            <Box>{weatherDescription}</Box>
        </Box>
    );
}

export default Temperature;
