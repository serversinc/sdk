import type { Serversinc } from '../client';
import type { Deployment, DeploymentsListResponse } from '../types';

export const deployments = (client: Serversinc) => ({
  list: (): Promise<DeploymentsListResponse> => client.request('GET', '/v1/deployments'),
  get: (id: string): Promise<Deployment> => client.request('GET', `/v1/deployments/${id}`),
});