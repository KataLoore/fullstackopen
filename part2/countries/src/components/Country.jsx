const Country = ({ country, showDetails }) => {
    return (
        <li>
            {country.name.common}
            <button onClick={() => showDetails(country)}>Details</button>
        </li>
    )
}

export default Country