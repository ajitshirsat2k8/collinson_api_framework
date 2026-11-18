import {
  When,
  Then
} from "@cucumber/cucumber";

import {
  ActivityRankingClient
}
from "../../src/clients/activityRankingClient";

import {
  AllureHelper
}
from "../../src/utils/allureHelper";

import {
  ActivityAssertions
}
from "../../src/assertions/activityAssertions";

import {
  ResponseHelper
}
from "../../src/utils/responseHelper";

const client =
  new ActivityRankingClient();

When(
  "I request activity rankings for {string}",
  async function (
    location: string
  ) {

    const payload = {
      location
    };

    this.requestPayload =
      payload;

    this.attach(
      JSON.stringify(payload, null, 2),
      "application/json"
    );

    /*AllureHelper.attachRequest(
      payload
    );  */

    this.response =
      await client.getRankings(
        payload
      );

    this.attach(
      JSON.stringify(
        this.response.data,
        null,
        2
      ),
      "application/json"
    );

    /*AllureHelper.attachResponse(
      this.response.data
    );*/
  }
);

Then(
  "the response status should be {int}",
  function (
    expectedStatus: number
  ) {

    ActivityAssertions
      .verifyStatus(
        this.response.status,
        expectedStatus
      );
  }
);

Then(
  "the response should contain the city {string}",
  function (
    city: string
  ) {

    ActivityAssertions
      .verifyCity(
        this.response.data.city,
        city
      );
  }
);

Then(
  "the response should contain 7 forecast days",
  function () {

    ActivityAssertions
      .verifyForecastDays(
        this.response.data
          .forecastDays
      );
  }
);

Then(
  "the response contract should be valid",
  function () {
    try {
      this.rankingResponse =
        ResponseHelper
          .validateSchema(
            this.response.data
          );
    } catch (error: any) {
      // Attach schema validation failure details to Allure
      
      /*AllureHelper.attachError({
        message: "Schema validation failed",
        details: error.errors || error.message,
        receivedData: this.response.data
      });*/
      throw error; // Re-throw so the test still fails properly
    }
  }
);