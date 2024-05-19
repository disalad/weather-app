import { Box, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';

function TodayTemperature({ temp, unit }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ThermostatIcon />
            <Typography>{`${temp} ${unit}`}</Typography>
        </Box>
    );
}

export default TodayTemperature;
