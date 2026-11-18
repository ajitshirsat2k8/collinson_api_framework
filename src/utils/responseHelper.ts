import {
  ActivityRankingResponseSchema
} from "../schemas/responseSchema";

import {
  SchemaValidator
} from "./schemaValidator";

export class ResponseHelper {

  static validateSchema(
    response: unknown
  ) {

    return SchemaValidator
      .validate(
        ActivityRankingResponseSchema,
        response
      );
  }
}