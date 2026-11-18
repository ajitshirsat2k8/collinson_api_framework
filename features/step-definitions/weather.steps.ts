import { Given }
from "@cucumber/cucumber";
import { mockContext }
from "../../src/mocks/mockContext";
import {
  weatherMocks
}
from "../../src/mocks/weatherMocks";

Given(
  "Open-Meteo weather service is available",
  function () {

    weatherMocks
      .sightseeing();
  }
);

Given(
  "Open-Meteo service returns server error",
  function () {
    mockContext.weatherFailure =
      "SERVER_ERROR";
  }
);

Given(
  "Open-Meteo service times out",
  function () {
    mockContext.weatherFailure =
      "TIMEOUT";
  }
);