import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchText, setSearchText] = useState('')

  const inPersons = (name) => {
    for (let person of persons) {
      if (person.name === name) return true
    }
    return false
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inPersons(newName)) {
      alert(`Duplicate name ${newName}`)
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <label htmlFor="search">filter: </label>
      <input name="search" onChange={event => setSearchText(event.target.value)} value={searchText}/>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name: </label>
          <input name="name" onChange={event => setNewName(event.target.value)} value={newName}/>     
        </div>
        <div>
          <label htmlFor="number">number: </label>
          <input name="number" onChange={event => setNewNumber(event.target.value)} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        if (person.name.toLowerCase().includes(searchText) || searchText === '')
        return (<p key={person.name}>{person.name} {person.number}</p>)  
        else return ""
      }
      )}
    </div>
  )
}

export default App