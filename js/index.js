const API_URL = `https://yahoo-weather5.p.rapidapi.com/weather?`


const init = async () => {
  // get the location
  const {coords: {latitude, longitude, accuracy}} = await getGeoLocation()
  console.log(latitude, longitude, accuracy)
  const weatherData = await getWindSpeed(latitude, longitude)
  console.log(weatherData)
  // const [wind_speed, wind_deg, wind_gust] = await getWindSpeed(latitude, longitude)
  // console.log(windSpeed, wind_deg, wind_gust)

}

const getWindSpeed = (lat, long) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
      'X-RapidAPI-Key': '7fef6e6adbmsh47f75aa7668900dp171344jsnffc326008096'
    }
  }
  return fetch(`${API_URL}lat=${lat}&long=${long}&format=json&u=f`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

const getGeoLocation = (options) => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

document.addEventListener('DOMContentLoaded', init)
