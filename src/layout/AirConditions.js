import { Box, Typography } from '@mui/material';
import ApparentTemp from 'components/AirConditions/ApparentTemp';
import WindSpeed from 'components/AirConditions/WindSpeed';
import CloudCover from 'components/AirConditions/CloudCover';
import Humidity from 'components/AirConditions/Humidity';

function AirConditions({ data, units }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography element='h2'>Air Conditions</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    p: 1,
                    m: 1,
                    width: '100%',
                }}
            >
                <ApparentTemp temp={data.apparent_temperature} unit={units.apparent_temperature} />
                <WindSpeed speed={data.wind_speed_10m} unit={units.wind_speed_10m} />
                <CloudCover clouds={data.cloud_cover} unit={units.cloud_cover} />
                <Humidity percentage={data.relative_humidity_2m} unit={units.relative_humidity_2m} />
            </Box>
        </Box>
    );
}

export default AirConditions;
