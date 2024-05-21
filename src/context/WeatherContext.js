import { createContext } from 'react';
import { useWeatherData } from 'hooks/useWeatherData';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const { weatherData, loading } = useWeatherData();

    return (
        <WeatherContext.Provider value={{ weatherData, loading }}>
            {children}
        </WeatherContext.Provider>
    );
}
