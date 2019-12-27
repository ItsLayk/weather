const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://api.openweathermap.org/data/2.5/';
    }

    willSendRequest(request) {
        request.params.set('APPID', this.context.apiKey);
    }

    async getCurrentWeather(city) {
        return await this.get(`/weather?q=${city},au`);
    }
}

module.exports = WeatherAPI;