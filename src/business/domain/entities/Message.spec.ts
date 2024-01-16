import Message from "./Message";

describe("Message", () => {
  it("should create a valid Message", () => {
    const input = {
      text: "Hello World",
      author: "John Doe",
      deviceID: "echosala",
    };
    const message = Message.create(input.text, input.author, input.deviceID);
    expect(message).toBeInstanceOf(Message);
  });
});
