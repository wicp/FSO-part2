import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

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
      const personObject = {name: newName}
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={event => setNewName(event.target.value)} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name}</p>  
      )}
    </div>
  )
}

export default App