import React from 'react'

const Country = ({country}) => {
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
        </div>
    )
}

export default Country