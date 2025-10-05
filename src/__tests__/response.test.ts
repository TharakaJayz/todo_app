import { formatErrorResponse } from "../utils/response";

describe("formatErrorResponse", () => {
  test("should format error response with default status code", () => {
    const result = formatErrorResponse("Test error message");

    expect(result).toEqual({
      success: false,
      message: "Test error message",
      statusCode: 400,
    });
  });

  test("should format error response with custom status code", () => {
    const result = formatErrorResponse("Not found", 404);

    expect(result).toEqual({
      success: false,
      message: "Not found",
      statusCode: 404,
    });
  });

  test("should format error response with 500 status code", () => {
    const result = formatErrorResponse("Internal server error", 500);

    expect(result).toEqual({
      success: false,
      message: "Internal server error",
      statusCode: 500,
    });
  });
});
