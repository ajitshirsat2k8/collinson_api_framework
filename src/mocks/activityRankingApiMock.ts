import nock from "nock";
import { mockContext } from "./mockContext";

export class ActivityRankingApiMock {
  static setupMock() {
    nock("http://localhost:3000")
      .persist()
      .post("/api/activity-rankings")
      .reply((uri, requestBody: any) => {
        if (
          mockContext.weatherFailure ===
          "SERVER_ERROR"
        ) {
          return [
            503,
            {
              message:
                "Weather service unavailable"
            }
          ];
        }

        if (
          mockContext.weatherFailure ===
          "TIMEOUT"
        ) {
          return [
            504,
            {
              message:
                "Weather service timeout"
            }
          ];
        }

        const location =
          requestBody?.location;

        //
        // VALIDATION ERRORS
        //

        if (
          location === undefined ||
          location === null ||
          location === ""
        ) {
          return [
            400,
            {
              message:
                "location is required"
            }
          ];
        }

        if (location.length < 2) {
          return [
            400,
            {
              message:
                "location must contain at least 2 characters"
            }
          ];
        }

        if (location.length > 100) {
          return [
            400,
            {
              message:
                "location exceeds maximum length"
            }
          ];
        }

        if (location === "@@@###") {
          return [
            400,
            {
              message:
                "Invalid location"
            }
          ];
        }

        if (location === "MoonCity") {
          return [
            404,
            {
              message:
                "Location not found"
            }
          ];
        }

        //
        // PARTIAL MATCHES
        //

        let city = "London";

        if (location === "Par") {
          city = "Paris";
        }

        if (location === "New") {
          city = "New York";
        }

        if (location === "Lon") {
          city = "London";
        }

        //
        // SUCCESS RESPONSE
        //

        return [
          200,
          {
            city,

            forecastDays: 7,

            rankings: [
              {
                date: "2026-11-18",

                activityName: "Skiing",

                suitability: "High",

                reasoning:
                  "Heavy snowfall and low temperatures."
              },

              {
                date: "2026-11-18",

                activityName: "Surfing",

                suitability: "High",

                reasoning:
                  "Good wave and wind conditions."
              },

              {
                date: "2026-11-18",

                activityName:
                  "Outdoor Sightseeing",

                suitability: "High",

                reasoning:
                  "Pleasant and clear weather."
              },

              {
                date: "2026-11-18",

                activityName:
                  "Indoor Sightseeing",

                suitability: "High",

                reasoning:
                  "Suitable indoor alternatives."
              }
            ]
          }
        ];
      });
  }
}