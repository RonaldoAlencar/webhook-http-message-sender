import IHttpRequest from "../../../../business/common/adapters/http-request";
import axios from "axios";

export default class AxiosAdapter implements IHttpRequest {
  async get<T>(url: string, options?: any): Promise<T> {
    return await axios.get(url, options);
  }
}
