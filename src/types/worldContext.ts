import {
  AxiosResponse
}
from "axios";

import {
  ActivityRankingResponse
}
from "./activity";

export interface WorldContext {

  response?:
    AxiosResponse<
      ActivityRankingResponse
    >;

  requestPayload?: any;

  errorMessage?: string;
}