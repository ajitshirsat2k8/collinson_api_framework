import {
  When,
  Then
}
from "@cucumber/cucumber";

import {
  ActivityRankingClient
}
from "../../src/clients/activityRankingClient";

import {
  ActivityAssertions
}
from "../../src/assertions/activityAssertions";

const client =
  new ActivityRankingClient();

When(
  "I submit a request without location",
  async function () {

    this.response =
      await client
        .getRankingsWithoutLocation();
  }
);

Then(
  "error message should be {string}",
  function (
    expected: string
  ) {

    const actual =
      this.response.data.message;

    ActivityAssertions
      .verifyMessage(
        actual,
        expected
      );
  }
);

When(
  "I request activity rankings containing more than 100 characters",
  async function () {

    const payload = {

      location:
        "L".repeat(101)
    };

    this.response =
      await client
        .getRankings(
          payload
        );
  }
);