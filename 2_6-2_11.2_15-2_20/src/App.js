import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Form from './Form'
import PersonDisplay from './PersonDisplay'
import dbservice from './services/dbservice'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchText, setSearchText] = useState('')

  useEffect(()=> {
    dbservice.getAll()
    .then(response => setPersons(response.data))
  },[])

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
      dbservice.create(personObject)
      .then(response => setPersons(persons.concat(response.data)))
      .catch(error => alert('Could not update notes'))
      setNewName('')
      setNewNumber('')
    }
  }
  const deletePerson = (deletedPerson) => {
    console.log('deleting',deletedPerson)
    dbservice.delete(deletedPerson)
    setPersons(persons.filter(person => person.id !== deletedPerson.id))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} setSearchText={setSearchText} />
      <h2>Add a new</h2>
      <Form handleSubmit={handleSubmit} setNewName={setNewName} setNewNumber={setNewNumber}
            newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <PersonDisplay persons={persons} searchText={searchText} deletePerson={deletePerson}/>
    </div>
  )
}

export default App