import CurrentWeather from 'layout/CurrentWeather';
import AirConditions from 'layout/AirConditions';
import data from 'api/OpenMeteo';

function App() {
    return (
        <>
            <CurrentWeather data={data.current} timezone={data.timezone} />
            <AirConditions data={data.current} units={data.current_units} />
        </>
    );
}

export default App;
