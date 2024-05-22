import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingScreen() {
    return (
        <Box
            sx={{
                minWidth: '100%',
                minHeight: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress />
        </Box>
    );
}

export default LoadingScreen;
