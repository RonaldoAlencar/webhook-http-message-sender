import dotenv from "dotenv";
dotenv.config();
import Controller from "./application/controller";
import AxiosAdapter from "./infra/adapters/rest/http/axios.adapter";
import { ExpressServerAdapter } from "./infra/adapters/server/express.adapter";

(() => {
  const axiosAdapter = new AxiosAdapter();
  const serverAdapter = new ExpressServerAdapter(3004);

  new Controller(axiosAdapter, serverAdapter);
})();
