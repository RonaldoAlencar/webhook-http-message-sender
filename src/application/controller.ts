import IHttpRequest from "../business/common/adapters/http-request";
import {
  IServer,
  Request,
  Response,
} from "../business/common/adapters/http-server";
import SendMessageUseCase from "../business/domain/services/use-cases/send-message.use-case";
import ParameterValidator from "../business/domain/validators/param-validator.service";
import { ReceiveMessageRequest } from "./types";

export default class Controller {
  private parameterValidator: ParameterValidator;

  constructor(
    readonly httpRequest: IHttpRequest,
    readonly server: IServer,
  ) {
    this.server.start();
    this.initializeRoutes();
    this.parameterValidator = new ParameterValidator();
  }

  private initializeRoutes() {
    this.server.post(
      "/webhook",
      (req: Request<ReceiveMessageRequest>, res: Response) => {
        try {
          const sendMessageUseCase = new SendMessageUseCase(this.httpRequest);
          const echoMatch = req.body.data.message.extendedTextMessage.text.match(/echo\w*/);
          const input = this.parameterValidator.validate({
            text: req.body.data.message.extendedTextMessage.text
              .replace(/echo\w*/g, "")
              .trim(),
            author: req.body.data.pushName,
            deviceID: echoMatch ? echoMatch[0] : process.env.DEFAULT_DEVICE_ID,
          });
          sendMessageUseCase.execute(input);
          res.sendStatus(200);
        } catch (error) {
          console.log(error);
          res.sendStatus(400, error);
        }
      },
    );

    this.server.get("/", (req: Request, res: Response) => {
      res.send(200, "<h1>Webhook whatsapp bot message is running!</h1>");
    });
  }
}
