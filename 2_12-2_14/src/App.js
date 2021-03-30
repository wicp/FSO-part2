import React, {useState, useEffect} from 'react'
import CountryList from './components/CountryList'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterText, setFilterText] = useState("")

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => setCountries(json))
  },[])

  return (
    <div>
      <SearchFilter filterText={filterText} setFilterText={setFilterText}/>
      <CountryList countries={countries} filterText={filterText}/>
    </div>
  );
}

export default App;
