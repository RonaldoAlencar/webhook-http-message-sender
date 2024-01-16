import ParameterValidator from "./param-validator.service";

describe("ParameterValidator", () => {
  let validator: ParameterValidator;

  beforeEach(() => {
    validator = new ParameterValidator();
  });

  it("should throw an error if text is missing", () => {
    expect(() =>
      validator.validate({ author: "author", deviceID: "deviceID" }),
    ).toThrow("Invalid or missing text parameter");
  });

  it("should throw an error if author is missing", () => {
    expect(() =>
      validator.validate({ text: "text", deviceID: "deviceID" }),
    ).toThrow("Invalid or missing author parameter");
  });

  it("should throw an error if deviceID is missing", () => {
    expect(() =>
      validator.validate({ text: "text", author: "author" }),
    ).toThrow("Invalid or missing deviceID parameter");
  });

  it("should return the input if all parameters are valid", () => {
    const input = { text: "text", author: "author", deviceID: "deviceID" };
    expect(validator.validate(input)).toEqual(input);
  });
});
