import CurrentWeather from 'layout/CurrentWeather';
import AirConditions from 'layout/AirConditions';
import TodayForecast from 'layout/TodayForecast';
import DailyForecast from 'layout/DailyForecast';
import LoadingScreen from 'components/Layout/LoadingScreen';
import { WeatherContext } from 'context/WeatherContext';
import { useContext } from 'react';

function WeatherLayouts() {
    const { loading } = useContext(WeatherContext);
    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <CurrentWeather />
                    <AirConditions />
                    <TodayForecast />
                    <DailyForecast />
                </>
            )}
        </>
    );
}

export default WeatherLayouts;
