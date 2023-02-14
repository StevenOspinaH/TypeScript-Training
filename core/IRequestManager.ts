
export enum ActionVerb {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Delete = 'delete',
  Patch = 'patch'
}

export class ErrorRequest extends Error{
  status: number | undefined ;
  response?: any | undefined;
}
export interface RequestResponse {
  data: any | undefined ;
  status: number | undefined;
  headers?: any | undefined;
}
export interface IrequestManager<TypeClass> {
  url: string;
  request(action: ActionVerb, endpoint: string, body?: Object, headers?: any): TypeClass | Promise<TypeClass>;
}
