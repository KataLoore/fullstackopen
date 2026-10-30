const Search = ({ search, handleSearch }) => (
  <div>
    search for countries: <br/>
    <input value={search} onChange={handleSearch} />
  </div>
)

export default Search
