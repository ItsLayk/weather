require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const WeatherAPI = require('./datasources/weather');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        weatherAPI: new WeatherAPI()
    }),
    context: {
        apiKey: process.env.WEATHER_API_KEY,
    },
    introspection: true
});

server.listen().then(({ url }) => {
    console.log(`Server started at ${url}`);
});