import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box, Typography } from '@mui/material';

function TodayPrecipitation({ perc, unit }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ThunderstormIcon />
            <Typography>{`${perc}${unit}`}</Typography>
        </Box>
    );
}

export default TodayPrecipitation;
