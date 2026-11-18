// features/step-definitions/activityRanking.steps.ts

import { Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { ActivityRankingClient } from "../../src/clients/activityRankingClient";

const client = new ActivityRankingClient();

When(
  "activity rankings are requested",
  async function () {

    this.response =
      await client.getRankings({
        location: "London"
      });
  }
);

Then(
  "matching city should be {string}",
  function (expectedCity: string) {

    expect(
      this.response.data.city
    ).to.equal(expectedCity);
  }
);

Then(
  "each ranking should contain",
  function (dataTable) {

    const fields =
      dataTable.hashes();

    const rankings =
      this.response.data.rankings;

    rankings.forEach(
      (ranking: any) => {

        fields.forEach(
          (field: any) => {

            expect(
              ranking
            ).to.have.property(
              field.field
            );
          }
        );
      }
    );
  }
);

Then(
  "ranking activities should be one of",
  function (dataTable) {

    const supportedActivities =
      dataTable
        .hashes()
        .map(
          (row: any) =>
            row.activity
        );

    this.response.data.rankings.forEach(
      (ranking: any) => {

        expect(
          supportedActivities
        ).to.include(
          ranking.activityName
        );
      }
    );
  }
);

Then(
  "reasoning should not be empty",
  function () {

    this.response.data.rankings.forEach(
      (ranking: any) => {

        expect(
          ranking.reasoning
        ).to.not.equal("");

        expect(
          ranking.reasoning
            .trim()
            .length
        ).to.be.greaterThan(0);
      }
    );
  }
);

Then(
  "rankings should be sorted by suitability score descending",
  function () {

    const scoreMap = {

      High: 3,
      Medium: 2,
      Low: 1
    };

    const rankings =
      this.response.data.rankings;

    for (
      let i = 0;
      i < rankings.length - 1;
      i++
    ) {

      const current =
        scoreMap[
          rankings[i]
            .suitability as keyof typeof scoreMap
        ];

      const next =
        scoreMap[
          rankings[i + 1]
            .suitability as keyof typeof scoreMap
        ];

      expect(current)
        .to.be.greaterThanOrEqual(next);
    }
  }
);