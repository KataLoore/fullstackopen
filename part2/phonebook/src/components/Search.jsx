const Search = ({ search, handleSearch }) => (
  <div>
    search:
    <input value={search} onChange={handleSearch} />
  </div>
)

export default Search
