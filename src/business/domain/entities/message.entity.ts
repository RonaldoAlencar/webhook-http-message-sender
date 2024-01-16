import Author from "./value-objects/author/author.value-object";
import DeviceID from "./value-objects/deviceID/deviceID.value-object";

export default class Message {
  private constructor(
    readonly text: string,
    readonly author: Author,
    readonly deviceID: DeviceID,
  ) {}

  public static create(
    text: string,
    author: string,
    deviceID: string,
  ): Message {
    return new Message(text, new Author(author), new DeviceID(deviceID));
  }

  public get getURLEncodedText(): string {
    return encodeURIComponent(this.text);
  }

  public get getURLEncodedAuthor(): string {
    return encodeURIComponent(this.author.getValue);
  }

  public get getURLEncodedDeviceID(): string {
    return encodeURIComponent(this.deviceID.getValue);
  }
}
