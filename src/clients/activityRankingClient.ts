import axios, {
  AxiosInstance,
  AxiosResponse
} from "axios";

import { config }
from "../config/config";

import {
  ActivityRankingRequest
}
from "../schemas/requestSchema";

export class ActivityRankingClient {

  private readonly client:
    AxiosInstance;

  constructor() {

    this.client =
      axios.create({

        baseURL:
          config.baseUrl,

        timeout: 5000,

        validateStatus: () => true
      });
  }

  async getRankings(
    payload:
    ActivityRankingRequest
  ): Promise<
    AxiosResponse<any>
  > {

    return this.client.post(
      "/api/activity-rankings",
      payload
    );
  }

  async getRankingsWithoutLocation()
  : Promise<
      AxiosResponse<any>
    > {

    return this.client.post(
      "/api/activity-rankings",
      {}
    );
  }
}