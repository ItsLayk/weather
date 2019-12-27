module.exports = {
    Query: {
        current: async (_, { city }, { dataSources, apiKey }, ) => {

            const currentWeather = await dataSources.weatherAPI.getCurrentWeather(city);

            console.log(currentWeather);

            return {
                city: currentWeather.name,
                weather: currentWeather.weather[0].main,
                description: currentWeather.weather[0].description,
                temp: currentWeather.main.temp,
                feels: currentWeather.main.feels_like,
                min: currentWeather.main.temp_min,
                max: currentWeather.main.temp_max,
                humidity: currentWeather.main.humidity
            }
        }
    }
};