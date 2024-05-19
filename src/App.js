import CurrentWeather from 'layout/CurrentWeather';
import AirConditions from 'layout/AirConditions';
import data from 'api/OpenMeteo';
import TodayForecast from 'layout/TodayForecast';

function App() {
    return (
        <>
            <CurrentWeather data={data.current} timezone={data.timezone} />
            <AirConditions data={data.current} units={data.current_units} />
            <TodayForecast data={data.hourly} units={data.hourly_units} />
        </>
    );
}

export default App;
