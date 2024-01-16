import dotenv from "dotenv";
dotenv.config();
import Controller from "./application/controller";
import AxiosAdapter from "./infra/adapters/rest/http/axios";
import { ExpressServer } from "./infra/adapters/server/express";

(() => {
  const axiosAdapter = new AxiosAdapter();
  const serverAdapter = new ExpressServer(3004);

  new Controller(axiosAdapter, serverAdapter);
})();
