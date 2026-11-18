import { expect } from "chai";

import {
  ActivityRankingResponseSchema
}
from "./responseSchema";

describe(
  "ActivityRankingResponseSchema",
  () => {

    it(
      "should validate response",
      () => {

        const response = {

          city: "London",

          forecastDays: 7,

          rankings: [
            {
              date:
                "2026-11-18",

              activityName:
                "Surfing",

              suitability:
                "High",

              reasoning:
                "Strong wave conditions."
            }
          ]
        };

        const result =
          ActivityRankingResponseSchema.parse(
            response
          );

        expect(
          result.city
        ).to.equal(
          "London"
        );
      }
    );

    it(
      "should reject invalid activity",
      () => {

        expect(() =>
          ActivityRankingResponseSchema.parse({
            city: "London",

            forecastDays: 7,

            rankings: [
              {
                date:
                  "2026-11-18",

                activityName:
                  "Football",

                suitability:
                  "High",

                reasoning:
                  "Good weather"
              }
            ]
          })
        ).to.throw();
      }
    );
  }
);