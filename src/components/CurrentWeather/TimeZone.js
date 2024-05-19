import { Box } from '@mui/material';
import { formatDate } from 'utils/formatDate';

function TimeZone({ timezone, date }) {
    const formattedDate = formatDate(date);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <Box>{timezone}</Box>
            <Box>{formattedDate}</Box>
        </Box>
    );
}

export default TimeZone;
