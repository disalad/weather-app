import { Box, Typography } from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function CloudCover({ clouds, unit }) {
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
            <Box sx={{ margin: 'auto' }}>{`${clouds} ${unit}`}</Box>
        </Box>
    );
}

export default CloudCover;
