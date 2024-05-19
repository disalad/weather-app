import CurrentWeather from 'layout/CurrentWeather';
import data from 'api/OpenMeteo';

function App() {
    return (
        <>
            <CurrentWeather data={data.current} timezone={data.timezone} />
        </>
    );
}

export default App;
