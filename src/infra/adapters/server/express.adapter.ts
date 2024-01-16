import express, { Request, Response } from "express";
import { IServer } from "../../../business/common/adapters/http-server";

export class ExpressServerAdapter implements IServer {
  private app = express();
  private server: any;

  constructor(private readonly port: number = 3003) {
    this.app = express();
    this.app.use(express.json());
  }

  async start() {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }

  async stop() {
    if (this.server) this.server.close();
  }

  get internalServer() {
    return this.app;
  }

  get(path: string, handler: (req: Request, res: Response) => void) {
    this.app.get(path, handler);
  }

  post(path: string, handler: (req: Request, res: Response) => void) {
    this.app.post(path, handler);
  }

  // TODO: Implement other HTTP methods
}
