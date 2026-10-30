import CountryList from './CountryList'
import CountryDetails from './CountryDetails'

const SearchResult = ({ countriesToShow, showDetails, selectedCountry }) => {

    if (selectedCountry) {return <CountryDetails country={selectedCountry} />}

    if (countriesToShow.length > 10) {
        return <p>Over 10 search results</p>
    } else if (countriesToShow.length === 1) {
        return (
            <CountryDetails country={countriesToShow[0]}/>
        )
    } else {
        return (
            <CountryList countriesToShow={countriesToShow} showDetails={showDetails}/>
        )
    }
}

export default SearchResult