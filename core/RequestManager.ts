import axios, {AxiosResponse, AxiosError} from 'axios';
import { IrequestManager, ActionVerb } from './IRequestManager';

class RequestManager implements IrequestManager<AxiosResponse> {
  axios = axios;
  constructor(public url: string) {
    this.axios.defaults.baseURL = url;
  }

  async request(action: ActionVerb, endpoint: string, body?: Object): Promise<AxiosResponse>{
    try {
      const response = await this.axios<AxiosResponse>({
        method: action,
        url: endpoint,
        data : body,
        headers: {
          Accept: 'application/json',
        },
      })

      return response;
    } catch (err){
      const errors = err as Error | AxiosError;
      if (!this.axios.isAxiosError(errors))  {
        console.error(errors.message);
        const newError = new AxiosError<any>;
        return newError.response?.data;
      } else {
        console.error(errors.response?.data);
        return errors.response?.data;
      }
    }
  }
}

export default new RequestManager('https://httpbin.org/');
