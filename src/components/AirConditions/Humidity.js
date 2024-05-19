import { Box, Typography } from '@mui/material';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';

function Humidity({ percentage, unit }) {
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
            <Box sx={{ margin: 'auto' }}>{`${percentage} ${unit}`}</Box>
        </Box>
    );
}

export default Humidity;
