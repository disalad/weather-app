import { useEffect, useState } from 'react';
import axios from 'axios';

export function useWeatherData() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiUrl = 'https://api.open-meteo.com/v1/forecast';
    let params;

    const setParameters = (latitude, longitude) => {
        params = {
            latitude: latitude,
            longitude: longitude,
            current: [
                'temperature_2m',
                'relative_humidity_2m',
                'apparent_temperature',
                'is_day',
                'precipitation',
                'weather_code',
                'cloud_cover',
                'wind_speed_10m',
            ],
            hourly: [
                'temperature_2m',
                'precipitation_probability',
                'weather_code',
                'wind_speed_10m',
            ],
            daily: [
                'weather_code',
                'temperature_2m_max',
                'apparent_temperature_max',
                'precipitation_probability_max',
                'wind_speed_10m_max',
            ],
            forecast_hours: 4,
        };
    };

    const getLocation = async () => {
        const res = await axios.get('http://ip-api.com/json');
        if (res.status === 200) {
            const locationData = res.data;
            console.warn(res.data);
            return {
                latitude: locationData?.lat,
                longitude: locationData?.lon,
                city: locationData?.city,
            };
        }
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const { latitude, longitude, city } = await getLocation();
            await setParameters(latitude, longitude);
            const response = await axios.get(apiUrl, { params });

            // Set user's city to the weather data object
            const data = response.data;
            data.city = city;
            setWeatherData(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { weatherData, loading };
}
