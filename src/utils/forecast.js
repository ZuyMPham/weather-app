const request = require('request')

const forecast = (location, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=72cdbf90e7ca4b4e86b201530233003&q='+location

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                "Location: " + body.location.name + ", " + body.location.region + ", " + body.location.country + "\n" +
                "Local Time: " + body.location.localtime + "\n" +
                "Current Temperature: " + body.current.temp_c + "°C / " + body.current.temp_f + "°F\n" +
                "Weather Condition: " + body.current.condition.text + "\n" +
                "Wind Speed: " + body.current.wind_kph + " km/h / " + body.current.wind_mph + " mph\n" +
                "Wind Direction: " + body.current.wind_dir + " (" + body.current.wind_degree + "°)\n" +
                "Air Pressure: " + body.current.pressure_mb + " mb / " + body.current.pressure_in + " inHg\n" +
                "Humidity: " + body.current.humidity + "%\n" +
                "Cloud Cover: " + body.current.cloud + "%\n" +
                "Precipitation: " + body.current.precip_mm + " mm / " + body.current.precip_in + " in\n" +
                "Feels Like: " + body.current.feelslike_c + "°C / " + body.current.feelslike_f + "°F\n" +
                "Visibility: " + body.current.vis_km + " km / " + body.current.vis_miles + " mi\n" +
                "UV Index: " + body.current.uv + "\n" +
                "Wind Gust: " + body.current.gust_kph + " km/h / " + body.current.gust_mph + " mph\n"
              );
              
       
        }
    })
}

module.exports = forecast