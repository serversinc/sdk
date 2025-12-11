import type { Serversinc } from '../client';
import type {
  NotificationChannel,
  CreateNotificationChannelRequest,
  UpdateNotificationChannelRequest,
  ChannelHistory,
  NotificationsListResponse,
} from '../types';

export const notifications = (client: Serversinc) => ({
  types: (): Promise<string[]> => client.request('GET', '/v1/notifications/types'),
  list: (): Promise<NotificationsListResponse> => client.request('GET', '/v1/notifications'),
  create: (data: CreateNotificationChannelRequest): Promise<NotificationChannel> =>
    client.request('POST', '/v1/notifications', data),
  get: (resourceId: string): Promise<NotificationChannel> =>
    client.request('GET', `/v1/notifications/${resourceId}`),
  update: (resourceId: string, data: UpdateNotificationChannelRequest): Promise<NotificationChannel> =>
    client.request('PUT', `/v1/notifications/${resourceId}`, data),
  delete: (resourceId: string): Promise<void> =>
    client.request('DELETE', `/v1/notifications/${resourceId}`),
  history: {
    list: (resourceId: string): Promise<ChannelHistory[]> =>
      client.request('GET', `/v1/notifications/${resourceId}/history`),
  },
  toggle: (resourceId: string): Promise<{ id: string; enabled: boolean }> =>
    client.request('PUT', `/v1/notifications/${resourceId}/toggle`),
});