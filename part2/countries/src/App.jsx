import { useState, useEffect } from 'react'
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import searchService from './services/search'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    searchService
      .getAllCountries()
      .then(countries => setCountries(countries))
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
    setSelectedCountry(null)
  }

  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(search)
  )

  const showDetails = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <Search search={search} handleSearch={handleSearch}/>
      <SearchResult 
        countriesToShow={countriesToShow} 
        selectedCountry={selectedCountry} 
        showDetails={showDetails}/>
    </div>
  )
}

export default App