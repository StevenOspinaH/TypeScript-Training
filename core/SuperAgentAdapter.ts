import superagent, {ResponseError} from 'superagent';
import { IrequestManager, ActionVerb, RequestResponse, ErrorRequest } from './IRequestManager';

class SuperAgentAdapter implements IrequestManager<RequestResponse> {
  adaptee;
  constructor(public url: string) {
    this.adaptee = superagent;
  }

  async request(action: ActionVerb, endpoint: string, body?: Object | undefined, headers?: any): Promise<RequestResponse> {
    try{
      const rta  = await this.adaptee(action, this.url + endpoint).set(headers || {"Content-Type":"application/json"}).send(body ?? '');
      const responseR: RequestResponse = {
        data: rta.body,
        status: rta.status,
        headers: rta.headers,
      }
      return responseR;
    } catch (err) {
      const error = err as ResponseError;
      const responseError: ErrorRequest = {
        response: {
          data: error.response?.text,
          status: error.response?.status
        },
        status: error.response?.status,
        name: error.name,
        message: error.message
      };
      console.error(error.response?.error);
      throw responseError as ErrorRequest;
    }
  }
}

export default new SuperAgentAdapter('https://httpbin.org/');
