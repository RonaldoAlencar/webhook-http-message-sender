export default interface IHttpRequest {
  get(url: string, options?: any): Promise<any>;
}
