import type { Serversinc } from '../client';
import type { Alert, CreateAlertRequest, UpdateAlertRequest, AlertsListResponse } from '../types';

export const alerts = (client: Serversinc) => ({
  list: (): Promise<AlertsListResponse> => client.request('GET', '/v1/alerts'),
  create: (data: CreateAlertRequest): Promise<Alert> => client.request('POST', '/v1/alerts', data),
  get: (alertId: string): Promise<Alert> => client.request('GET', `/v1/alerts/${alertId}`),
  update: (alertId: string, data: UpdateAlertRequest): Promise<Alert> =>
    client.request('PUT', `/v1/alerts/${alertId}`, data),
  delete: (alertId: string): Promise<void> => client.request('DELETE', `/v1/alerts/${alertId}`),
  toggle: (alertId: string): Promise<{ id: string; status: string }> =>
    client.request('PUT', `/v1/alerts/${alertId}/toggle`),
});