import React, { useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import PersonDisplay from './PersonDisplay'

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
      <Filter searchText={searchText} setSearchText={setSearchText} />
      <h2>Add a new</h2>
      <Form handleSubmit={handleSubmit} setNewName={setNewName} setNewNumber={setNewNumber}
            newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <PersonDisplay persons={persons} searchText={searchText} />
    </div>
  )
}

export default App