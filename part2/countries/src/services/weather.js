import axios from 'axios'
const baseURL = `https://api.openweathermap.org/data/4.0/onecall/`

const getWeather = (lat, lon, api) => {
  const request = axios.get(baseURL + `current?lat=${lat}&lon=${lon}&appid=${api}&units=metric`)
  return request.then(response => response.data)
}

export default { getWeather }