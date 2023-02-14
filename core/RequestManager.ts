import axios, {AxiosResponse, AxiosError} from 'axios';
import { IrequestManager, ActionVerb, RequestResponse } from './IRequestManager';

class RequestManager implements IrequestManager<RequestResponse> {
  axios = axios;
  constructor(public url: string) {
    this.axios.defaults.baseURL = url;
  }

  async request(action: ActionVerb, endpoint: string, body?: Object, headers?: any): Promise<RequestResponse>{
    try {
      const rta = await this.axios<AxiosResponse>({
        method: action,
        url: endpoint,
        data : body,
        headers: headers || {
          Accept: 'application/json',
        },
      })

      const responseAdaptee:RequestResponse = {
        data: rta.data,
        status: rta.status,
        headers: rta.headers
      };

      return responseAdaptee;
    } catch (err){
      const errors = err as AxiosError;
      console.error(errors.stack);
      console.error(errors.response?.data);
      throw errors;
    }
  }
}

export default new RequestManager('https://httpbin.org/');
