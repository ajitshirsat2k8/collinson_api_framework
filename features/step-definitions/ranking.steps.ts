import {
  Given,
  Then
}
from "@cucumber/cucumber";

import { expect }
from "chai";

import {
  WeatherMockFactory
}
from "../../src/mocks/weatherMockFactory";

Given(
  "weather forecast is suitable for skiing",
  function () {

    WeatherMockFactory
      .mockCustomWeather(
        -8,
        2,
        15,
        12
      );
  }
);

Given(
  "weather forecast is suitable for surfing",
  function () {

    WeatherMockFactory
      .mockCustomWeather(
        24,
        0,
        0,
        30
      );
  }
);



Given(
  "weather forecast is suitable for outdoor sightseeing",
  function () {

    WeatherMockFactory
      .mockCustomWeather(
        20,
        0,
        0,
        8
      );
  }
);

Given(
  "weather forecast contains heavy rainfall",
  function () {

    WeatherMockFactory
      .mockCustomWeather(
        18,
        50,
        0,
        10
      );
  }
);

Then(
  "{string} suitability should be {string}",
  function (
    activityName: string,
    suitability: string
  ) {

    const activity =
      this.response.data.rankings
      .find(
        (x: any) =>
          x.activityName ===
          activityName
      );

    expect(activity)
      .to.not.equal(
        undefined
      );

    expect(
      activity.suitability
    ).to.equal(
      suitability
    );
  }
);

Then(
  "all rankings should contain reasoning",
  function () {

    const rankings =
      this.response.data.rankings;

    rankings.forEach(
      (ranking: any) => {

        expect(
          ranking.reasoning
        ).to.exist;

        expect(
          ranking.reasoning.trim()
            .length
        ).to.be.greaterThan(0);
      }
    );
  }
);