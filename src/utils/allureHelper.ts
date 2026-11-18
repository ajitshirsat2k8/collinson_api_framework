import { attachment } from "allure-js-commons";

export class AllureHelper {
  static async attachRequest(payload: unknown) {
    await attachment(
      "Request Payload",
      JSON.stringify(payload, null, 2),
      "application/json"
    );
  }

  static async attachResponse(response: unknown) {
    await attachment(
      "Response Payload",
      JSON.stringify(response, null, 2),
      "application/json"
    );
  }

  static async attachError(error: unknown) {
    await attachment(
      "Error Details",
      typeof error === "string" ? error : JSON.stringify(error, null, 2),
      "text/plain"
    );
  }
}