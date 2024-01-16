import IHttpRequest from "../../../common/adapters/http-request";
import { Input } from "./dto/input";
import SendMessageUseCase from "./send-message.use-case";

describe("SendMessage", () => {
  let mockHttpRequest: IHttpRequest;

  beforeEach(() => {
    mockHttpRequest = {
      get: jest.fn(),
    };
  });

  it("should create a valid SendMessage", () => {
    const input: Input = {
      text: "hello",
      author: "John Doe",
      deviceID: "echoescritorio",
    };
    const sendMessage = new SendMessageUseCase(mockHttpRequest);
    sendMessage.execute(input);
    expect(sendMessage).toBeInstanceOf(SendMessageUseCase);
  });

  it("should do http request", () => {
    const input: Input = {
      text: "hello",
      author: "John Doe",
      deviceID: "echoescritorio",
    };
    const spy = jest.spyOn(mockHttpRequest, "get");
    const sendMessage = new SendMessageUseCase(mockHttpRequest);
    sendMessage.execute(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should do http request with correct parameters", () => {
    const input: Input = {
      text: "hello world",
      author: "John Doe",
      deviceID: "echoescritorio",
    };

    const sendMessage = new SendMessageUseCase(mockHttpRequest);
    sendMessage.execute(input);
    const urlExpectedParameters = `&text=Mensagem%20recebida%20de%20${encodeURIComponent(input.author)}.%20${encodeURIComponent(input.text)}&device=${encodeURIComponent(input.deviceID)}`;
    expect(mockHttpRequest.get).toHaveBeenCalledWith(
      expect.stringContaining(urlExpectedParameters),
    );
  });
});
