import nock from "nock";
import {
  dynamicForecast
}
from "./fixtures/dynamicForecast";

import { config } from "../config/config";

import { skiingForecast }
  from "./fixtures/skiingForecast";

import { surfingForecast }
  from "./fixtures/surfingForecast";

import { sightseeingForecast }
  from "./fixtures/sightseeingForecast";

import { rainyForecast }
  from "./fixtures/rainyForecast";

export class WeatherMockFactory {

  private static get baseUrl() {

    return config.weatherApi;
  }

  static mockSkiingWeather(): void {

    nock(this.baseUrl)
      .get(/.*/)
      .reply(
        200,
        skiingForecast
      );
  }

  static mockSurfingWeather(): void {

    nock(this.baseUrl)
      .get(/.*/)
      .reply(
        200,
        surfingForecast
      );
  }

  static mockSightseeingWeather(): void {

    nock(this.baseUrl)
      .get(/.*/)
      .reply(
        200,
        sightseeingForecast
      );
  }

  static mockRainyWeather(): void {

    nock(this.baseUrl)
      .get(/.*/)
      .reply(
        200,
        rainyForecast
      );
  }

  static mockServerError(): void {

    nock(this.baseUrl)
      .get(/.*/)
      .reply(
        500,
        {
          message:
            "Weather provider failure"
        }
      );
  }

  
  static mockCustomWeather(

  temperature: number,

  rainfall: number,

  snowfall: number,

  wind: number
): void {

  nock(this.baseUrl)
    .get(/.*/)
    .reply(
      200,

      dynamicForecast(
        temperature,
        rainfall,
        snowfall,
        wind
      )
    );
}

  static mockTimeout(): void {

    nock(this.baseUrl)
      .get(/.*/)
      .delayConnection(5000)
      .reply(
        504,
        {
          message:
            "Gateway Timeout"
        }
      );
  }
}