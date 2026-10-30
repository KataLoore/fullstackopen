const CountryDetails = ({ country }) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <ul>
                <li>Capital: {country.capital}</li>
                <li>Area: {country.area}</li>
            </ul>
            <p>Languages:</p>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>

            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    )
}

export default CountryDetails