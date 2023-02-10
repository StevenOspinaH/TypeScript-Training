
export enum ActionVerb {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Delete = 'delete'
}

export interface IrequestManager<TypeClass> {
  url: string;
  request(action: ActionVerb, endpoint: string, body?: Object): TypeClass | Promise<TypeClass>;
}
