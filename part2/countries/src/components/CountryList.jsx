import Country from './Country'

const CountryList = ({ countriesToShow, showDetails }) => {
    return (
        <ul>
            {countriesToShow.map(country => 
                <Country key={country.cca3} country={country} showDetails={showDetails}/>
            )}
        </ul>
    )
}

export default CountryList