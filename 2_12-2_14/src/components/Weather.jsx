import React from 'react'

const Weather = ({weather}) => {
    return (
        <>
        <h3>Weather in {weather.location.name}</h3>
        <p>temperature: {weather.current.temperature} celsius</p>
        {weather.current.weather_icons.map(icon => 
        <img alt="weather icon" key={icon} src={icon}></img>
        )}
        <p>wind: {weather.current.wind_speed}mph {weather.current.wind_dir}</p>
        </>
    )
}

export default Weather