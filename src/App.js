import { WeatherProvider } from 'context/WeatherContext';
import WeatherLayouts from 'layout/WeatherLayouts';

function App() {
    return (
        <WeatherProvider>
            <WeatherLayouts />
        </WeatherProvider>
    );
}

export default App;
