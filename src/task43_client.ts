import RequestManager from '../core/RequestManager';
import { ActionVerb } from '../core/IRequestManager';

(async ()=> {
  //const requester = new RequestManager('https://httpbin.org/');
  const response = await RequestManager.request(ActionVerb.Get, 'get');
  console.log("data", response.data);
  console.log("Status:",response.status);
}
)();
