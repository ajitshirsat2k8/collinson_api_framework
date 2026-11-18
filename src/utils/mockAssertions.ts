import nock from "nock";

export class MockAssertions {

  static verifyAllMocksUsed(): void {

    const pending =
      nock.pendingMocks();

    if (pending.length > 0) {

      throw new Error(
        `Unused mocks detected:
         ${pending.join(", ")}`
      );
    }
  }
}