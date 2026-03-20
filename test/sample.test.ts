import { describe, it, expect } from "vitest";
import { greet, add } from "../src/sample.js";

describe("greet", () => {
  it("returns a greeting message", () => {
    expect(greet("Taku")).toBe("Hello, Taku!");
  });
});

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
