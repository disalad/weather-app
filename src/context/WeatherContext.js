import { createContext, useEffect, useState } from 'react';
import data from 'api/OpenMeteo';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchWeatherData = async () => {
        try {
            setWeatherData(data);
            setLoading(false);
        } catch (err) {
            console.error(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <WeatherContext.Provider value={{ weatherData, loading }}>
            {children}
        </WeatherContext.Provider>
    );
}
