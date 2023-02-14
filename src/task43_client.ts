import RequestManager from '../core/RequestManager';
import { ActionVerb } from '../core/IRequestManager';

(async ()=> {
  const response = await RequestManager.request(ActionVerb.Get, 'ge');
  console.log("data", response.data);
  console.log("Status:",response.status);
}
)();
