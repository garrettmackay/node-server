import request from "request-promise";
import * as Provider from "./GeocoderController";

jest.mock("request-promise");

describe("GeocoderController", () => {
  test("an empty query string", async () => {
    (request as any).mockImplementation(() => '{"features": []}');
    const result = await Provider.getPlacesByName("Paris");
    expect(result).toEqual({ features: [] });
  });
   test("an invalid non-json response from open cage api", async () => {
    (request as any).mockImplementation(() => "Service Unavailable.");
    await expect(Provider.getPlacesByName("Chamonix")).rejects.toThrow(SyntaxError);
  });
});