import { expect } from "chai";

import {
  ActivityRankingRequestSchema
}
from "./requestSchema";

describe(
  "ActivityRankingRequestSchema",
  () => {

    it(
      "should validate a valid request",
      () => {

        const payload = {
          location: "London"
        };

        const result =
          ActivityRankingRequestSchema.parse(
            payload
          );

        expect(
          result.location
        ).to.equal(
          "London"
        );
      }
    );

    it(
      "should reject empty location",
      () => {

        expect(() =>
          ActivityRankingRequestSchema.parse({
            location: ""
          })
        ).to.throw();
      }
    );

    it(
      "should reject null location",
      () => {

        expect(() =>
          ActivityRankingRequestSchema.parse({
            location: null
          })
        ).to.throw();
      }
    );

    it(
      "should reject undefined location",
      () => {

        expect(() =>
          ActivityRankingRequestSchema.parse(
            {}
          )
        ).to.throw();
      }
    );
  }
);