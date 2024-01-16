import Author from "./Author";

describe("Author", () => {
  it("should create a valid Author", () => {
    const input = "John Doe";
    const author = new Author(input);
    expect(author).toBeInstanceOf(Author);
  });

  it("should throw an error for an invalid Author", () => {
    const input = "Jo";
    expect(() => new Author(input)).toThrow("Invalid Author");
  });

  it("should return the value of the Author", () => {
    const input = "John Doe";
    const author = new Author(input);
    expect(author.getValue).toEqual(input);
  });
});
