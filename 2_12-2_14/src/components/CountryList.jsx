import React from 'react'
import Country from './Country'

const CountryList = ({countries, filterText}) => {
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filterText))
    if (countries.length === 0)
    return (
        <p>loading...</p>
    )
    else if (filteredCountries.length === 0)
    return (
        <p>No matches, try a less specific filter</p>
    )
    else if (filteredCountries.length === 1)
    return (
        <Country country={filteredCountries[0]} />
    )
    else if (filteredCountries.length < 11)
    return (
        <ul>
            {filteredCountries.map(country => <li key={country.name}>{country.name}</li>)}
        </ul>
    )
    else if (filteredCountries.length > 10)
    return (
        <p>Too many matches, specify another filter</p>
    )
    else return (<p>error with {JSON.stringify(countries)}</p>)
}

export default CountryList