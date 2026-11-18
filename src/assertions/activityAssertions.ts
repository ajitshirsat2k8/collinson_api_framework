import { expect }
from "chai";

export class ActivityAssertions {

  static verifyStatus(
    actual: number,
    expected: number
  ): void {

    expect(actual).to.equal(
      expected
    );
  }

  static verifyCity(
    city: string,
    expected: string
  ): void {

    expect(city).to.equal(
      expected
    );
  }

  static verifyForecastDays(
    forecastDays: number
  ): void {

    expect(
      forecastDays
    ).to.equal(7);
  }

  static verifyMessage(
    actual: string,
    expected: string
  ): void {

    expect(actual)
      .to.equal(expected);
  }
}