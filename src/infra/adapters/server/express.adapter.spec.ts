import request from "supertest";
import { ExpressServerAdapter } from "./express.adapter";
import { Request, Response } from "express";

describe("ExpressServer", () => {
  let server: ExpressServerAdapter;

  beforeEach(() => {
    server = new ExpressServerAdapter(3003);
  });

  afterEach(() => {
    if (server) server.stop();
  });

  it("should start the server on the specified port", async () => {
    const server = new ExpressServerAdapter(3333);
    await server.start();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(server.internalServer).toBeDefined();
    await server.stop();
  });

  it("should start the server on the default port", async () => {
    const server = new ExpressServerAdapter();
    await server.start();
    expect(server.internalServer).toBeDefined();
    await server.stop();
  });

  it("should handle GET requests", async () => {
    server.get("/test", (req: Request, res: Response) =>
      res.send("GET request handled"),
    );
    const response = await request(server.internalServer).get("/test");
    expect(response.text).toBe("GET request handled");
  });

  it("should handle POST requests", async () => {
    server.post("/test", (req: Request, res: Response) =>
      res.send("POST request handled"),
    );
    const response = await request(server.internalServer).post("/test");
    expect(response.text).toBe("POST request handled");
  });
});
