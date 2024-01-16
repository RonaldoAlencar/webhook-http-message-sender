import { Input } from "../services/use-cases/dto/input";

export default class ParameterValidator {
  validate(params: any): Input {
    if (!params.text || typeof params.text !== "string") {
      throw new Error("Invalid or missing text parameter");
    }

    if (!params.author || typeof params.author !== "string") {
      throw new Error("Invalid or missing author parameter");
    }

    if (!params.deviceID || typeof params.deviceID !== "string") {
      throw new Error("Invalid or missing deviceID parameter");
    }

    return {
      text: params.text,
      author: params.author,
      deviceID: params.deviceID,
    };
  }
}
