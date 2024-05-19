import { Box, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';

function WindSpeed({ speed, unit }) {
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
                <AirIcon />
                <Typography>Wind</Typography>
            </Box>
            <Box sx={{ margin: 'auto' }}>{`${speed} ${unit}`}</Box>
        </Box>
    );
}

export default WindSpeed;
