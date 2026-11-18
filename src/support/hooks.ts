import {
  Before,
  After
}
from "@cucumber/cucumber";


import {
  Status
}
from "@cucumber/cucumber";

import nock
from "nock";

import {
  MockAssertions
}
from "../utils/mockAssertions";
import { mockContext }
from "../mocks/mockContext";

import {
  ActivityRankingApiMock
}
from "../mocks/activityRankingApiMock";

Before(function() {

  nock.cleanAll();
    ActivityRankingApiMock
    .setupMock();
  mockContext.weatherFailure =
    undefined;

});

Before(function () {


  nock.disableNetConnect();

  nock.enableNetConnect(
    host =>
      host.includes(
        "127.0.0.1"
      )
  );

  this.response = undefined;

  this.requestPayload =
    undefined;

  this.errorMessage =
    undefined;
});

After(function () {

 //MockAssertions.verifyAllMocksUsed();

  nock.cleanAll();

  nock.abortPendingRequests();
});

After(
  async function (
    scenario
  ) {

    if (
      scenario.result?.status ===
      Status.FAILED
    ) {

      await this.attach(

        JSON.stringify(
          {
            request:
              this.requestPayload,

            response:
              this.response?.data
          },
          null,
          2
        ),

        "application/json"
      );
    }
  }
);