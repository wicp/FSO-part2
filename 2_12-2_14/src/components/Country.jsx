import React, { useState, useEffect } from 'react'
import Weather from './Weather'

const Country = ({country}) => {
    const [weather,setWeather] = useState({})
    useEffect(() => {
        fetch(encodeURI(
            "http://api.weatherstack.com/current?access_key="
            + process.env.REACT_APP_API_KEY
            + "&query="
            + country.capital
            ))
        .then(response => response.json())
        .then(json => setWeather(json))
    },[country])

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <h3>languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}
            </ul>
            <img alt={`flag ${country.alpha2Code}`} src={country.flag} width="100"></img>
            {weather.current ? <Weather weather={weather}/> : null}
        </div>
    )
}

export default Country