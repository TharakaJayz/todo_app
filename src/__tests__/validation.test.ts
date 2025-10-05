import { validateTask } from "../utils/validation";

describe("validateTask", () => {
  test("should return null for valid input", () => {
    const result = validateTask("Valid title", "Valid description");
    expect(result).toBeNull();
  });

  test("should return error for missing title", () => {
    const result = validateTask("", "Valid description");
    expect(result).toBe("Title is required and must be a non-empty string");
  });

  test("should return error for null title", () => {
    const result = validateTask(null, "Valid description");
    expect(result).toBe("Title is required and must be a non-empty string");
  });

  test("should return error for undefined title", () => {
    const result = validateTask(undefined, "Valid description");
    expect(result).toBe("Title is required and must be a non-empty string");
  });

  test("should return error for non-string title", () => {
    const result = validateTask(123, "Valid description");
    expect(result).toBe("Title is required and must be a non-empty string");
  });

  test("should return error for title too long", () => {
    const longTitle = "a".repeat(256);
    const result = validateTask(longTitle, "Valid description");
    expect(result).toBe("Title must be 255 characters or less");
  });

  test("should return error for non-string description", () => {
    const result = validateTask("Valid title", 123);
    expect(result).toBe("Description must be a string");
  });

  test("should return null for valid title with null description", () => {
    const result = validateTask("Valid title", null);
    expect(result).toBeNull();
  });

  test("should return null for valid title with undefined description", () => {
    const result = validateTask("Valid title", undefined);
    expect(result).toBeNull();
  });
});
