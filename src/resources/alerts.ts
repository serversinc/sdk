import type { Serversinc } from '../client';

export const alerts = (client: Serversinc) => ({
  list: () => client.request('GET', '/v1/alerts'),
  create: (body: any) => client.request('POST', '/v1/alerts', body),
  get: (alertId: string) => client.request('GET', `/v1/alerts/${alertId}`),
  update: (alertId: string, body: any) => client.request('PUT', `/v1/alerts/${alertId}`, body),
  delete: (alertId: string) => client.request('DELETE', `/v1/alerts/${alertId}`),
  toggle: (alertId: string) => client.request('PUT', `/v1/alerts/${alertId}/toggle`),
});