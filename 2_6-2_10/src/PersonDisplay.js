import React from 'react'

const PersonDisplay = ({persons, searchText}) => {
    return (
        <div>
            {persons.map(person => {
                if (person.name.toLowerCase().includes(searchText) || searchText === '')
                return (<p key={person.name}>{person.name} {person.number}</p>)
                else return ""
              })
            }
        </div>
    )
}

export default PersonDisplay