const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        current(city: String): Weather
        forecast(city: String): [Weather]
    }

    type Weather {
        city: String
        weather: String
        description: String
        temp: Float
        feels: Float
        min: Float
        max: Float,
        humidity: Int
    }
`;

module.exports = typeDefs;