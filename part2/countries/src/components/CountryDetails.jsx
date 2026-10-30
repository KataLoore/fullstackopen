import { useEffect, useState } from 'react'
import weatherService from '../services/weather'

const CountryDetails = ({ country }) => {
    const [weather, setWeather] = useState(null)
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]

    useEffect(() => {
    weatherService
        .getWeather(lat, lon, import.meta.env.VITE_WEATHER_API_KEY)
        .then(returnedWeather => {
        setWeather(returnedWeather)
        })
        .catch(error => {
        console.error('Weather request failed:', error)
        })
    }, [lat, lon])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <ul>
                <li>Capital: {country.capital}</li>
                <li>Area: {country.area}</li>
            </ul>

            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>

            <h2>Flag</h2>
            <img src={country.flags.png} alt={country.flags.alt} />

            <h2>Weather</h2>
            <h3>{country.capital}</h3>
            {weather
                ? (
                <div>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Wind: {weather.wind.speed} m/s</p>
                    <p>{weather.weather[0].description}</p>
                </div>
                )
                : <p>Loading weather...</p>
            }
        </div>
    )
}

export default CountryDetails