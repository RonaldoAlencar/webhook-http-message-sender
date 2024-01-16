export interface IServer {
  start(): Promise<void>;
  get(path: string, handler: (req: any, res: any) => void): void;
  post(path: string, handler: (req: any, res: any) => void): void;
}

export interface Request<T = any> {
  body: any;
  query: any;
  params: any;
  headers: any;
  method: string;
  url: string;
}

export interface Response {
  send(status: number, body?: any): void;
  json(body: any): void;
  sendStatus(status: number): void;
}
