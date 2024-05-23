import { Box, Typography } from '@mui/material';
import ApparentTemp from 'components/AirConditions/ApparentTemp';
import WindSpeed from 'components/AirConditions/WindSpeed';
import CloudCover from 'components/AirConditions/CloudCover';
import Humidity from 'components/AirConditions/Humidity';

function AirConditions() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant='h2' element='h2' sx={{ margin: '0 0 0.8rem' }}>
                AIR CONDITIONS
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    p: 1,
                    m: 1,
                    width: '100%',
                }}
            >
                <ApparentTemp />
                <WindSpeed />
                <CloudCover />
                <Humidity />
            </Box>
        </Box>
    );
}

export default AirConditions;
