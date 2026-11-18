import {
  WeatherMockFactory
} from "./weatherMockFactory";

export const weatherMocks = {

  skiing: () =>
    WeatherMockFactory
      .mockSkiingWeather(),

  surfing: () =>
    WeatherMockFactory
      .mockSurfingWeather(),

  sightseeing: () =>
    WeatherMockFactory
      .mockSightseeingWeather(),

  rainy: () =>
    WeatherMockFactory
      .mockRainyWeather(),

  serverError: () =>
    WeatherMockFactory
      .mockServerError(),

  timeout: () =>
    WeatherMockFactory
      .mockTimeout()
};