import IHttpRequest from "../../../common/adapters/http-request";
import Message from "../../entities/Message";
import { Input } from "./dto/input";

export default class SendMessageUseCase {
  private _voiceMonkeyAPIURL: string = process.env.VOICE_MONKEY_API_URL!!;
  private _voiceMonkeyAPIToken: string = process.env.VOICE_MONKEY_API_TOKEN!!;

  constructor(readonly httpRequest: IHttpRequest) {}

  public async execute(input: Input): Promise<void> {
    const messageEntity = Message.create(
      input.text,
      input.author,
      input.deviceID,
    );
    await this.httpRequest.get(
      `${this._voiceMonkeyAPIURL}?token=${this._voiceMonkeyAPIToken}${this.formatURLParameters(messageEntity)}`,
    );
  }

  private formatURLParameters(messageEntity: Message): string {
    const outputSpeaker = `Mensagem%20recebida%20de%20${messageEntity.getURLEncodedAuthor}.%20${messageEntity.getURLEncodedText}`;
    return `&text=${outputSpeaker}&device=${messageEntity.getURLEncodedDeviceID}`;
  }
}
