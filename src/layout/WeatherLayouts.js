import CurrentWeather from 'layout/CurrentWeather';
import AirConditions from 'layout/AirConditions';
import TodayForecast from 'layout/TodayForecast';
import { WeatherContext } from 'context/WeatherContext';
import { useContext } from 'react';

function WeatherLayouts() {
    const { loading } = useContext(WeatherContext);
    return (
        <>
            {loading ? (
                <>Loading</>
            ) : (
                <>
                    <CurrentWeather />
                    <AirConditions />
                    <TodayForecast />
                </>
            )}
        </>
    );
}

export default WeatherLayouts;
