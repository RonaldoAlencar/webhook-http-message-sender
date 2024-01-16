import IHttpRequest from "../../../../business/common/adapters/http-request";
import axios from "axios";

export default class AxiosAdapter implements IHttpRequest {
  async get(url: string, options?: any): Promise<any> {
    return await axios.get(url, options);
  }
}
