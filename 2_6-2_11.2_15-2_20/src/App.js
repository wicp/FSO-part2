import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Notification from './components/Notification'
import PersonDisplay from './components/PersonDisplay'
import dbservice from './services/dbservice'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchText, setSearchText] = useState('')
  const [ notification, setNotification] = useState('')

  useEffect(()=> {
    dbservice.getAll()
    .then(response => setPersons(response.data))
  },[])

  const newNotification = (message, timeout) => {
    setNotification(message)
    if (timeout) setTimeout(() => setNotification(''),timeout)
  }

  const inPersons = (name) => {
    for (let person of persons) {
      if (person.name === name) return person
    }
    return false
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const oldPerson = inPersons(newName)
    if (oldPerson) {
      const confirmation = window.confirm(
        `${newName} is already in the phonebook, replace old number with new?`
      )
      if (confirmation) {
        dbservice.update({...oldPerson, number: newNumber})
        .then(response => {
          setPersons(persons.map( person => {
            if (person.name === newName) return response.data
            else return person
          }))
          newNotification(`Updated number for ${response.data.name}`,3000)
        }
        )
        .catch(error => alert('Could not update number'))
      }
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      dbservice.create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        newNotification(`Added ${response.data.name}`,3000)
      })
      .catch(error => alert('Could not update phonebook'))
    }
    setNewName('')
    setNewNumber('')
  }
  const deletePerson = (deletedPerson) => {
    dbservice.delete(deletedPerson)
    setPersons(persons.filter(person => person.id !== deletedPerson.id))
  }

  return (
    <div>
      <Notification message={notification} />
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