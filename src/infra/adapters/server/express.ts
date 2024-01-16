import express, { Request, Response } from "express";
import { IServer } from "../../../business/common/adapters/http-server";

export class ExpressServer implements IServer {
  private app = express();

  constructor(private readonly port: number = 3003) {
    this.app.use(express.json());
  }

  async start() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }

  get(path: string, handler: (req: Request, res: Response) => void) {
    this.app.get(path, handler);
  }

  post(path: string, handler: (req: Request, res: Response) => void) {
    this.app.post(path, handler);
  }

  // TODO: Implement other HTTP methods
}
