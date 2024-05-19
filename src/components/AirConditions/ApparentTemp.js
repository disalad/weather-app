import { Box, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';

function Temperature({ temp, unit }) {
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
                <ThermostatIcon />
                <Typography>Real Feel</Typography>
            </Box>
            <Box sx={{ margin: 'auto' }}>{`${temp} ${unit}`}</Box>
        </Box>
    );
}

export default Temperature;
