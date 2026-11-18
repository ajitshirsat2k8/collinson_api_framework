import { ZodSchema } from "zod";

export class SchemaValidator {

  static validate<T>(
    schema: ZodSchema<T>,
    payload: unknown
  ): T {

    return schema.parse(
      payload
    );
  }
}
