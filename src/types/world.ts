import {
  IWorldOptions,
  World,
  setWorldConstructor
} from "@cucumber/cucumber";

import { AxiosResponse } from "axios";

export class CustomWorld extends World {

  public response?:
    AxiosResponse<any>;

  public requestPayload?: any;

  public resolvedCity?: string;

  public rankingResponse?: any;

  public errorMessage?: string;

  constructor(
    options: IWorldOptions
  ) {
    super(options);
  }
}

setWorldConstructor(
  CustomWorld
);