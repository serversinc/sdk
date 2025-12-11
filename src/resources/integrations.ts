import type { Serversinc } from '../client';
import type { IntegrationToken, CreateIntegrationRequest } from '../types';

export const integrations = (client: Serversinc) => ({
  list: (): Promise<IntegrationToken[]> => client.request('GET', '/v1/integrations'),
  create: (data: CreateIntegrationRequest): Promise<IntegrationToken> => client.request('POST', '/v1/integrations', data),
  delete: (id: string): Promise<void> => client.request('DELETE', `/v1/integrations/${id}`),
  github: {
    create: (provider: string, data?: any): Promise<IntegrationToken> =>
      client.request('POST', `/v1/integrations/${provider}/create`, data),
    redirect: (provider: string): Promise<{ url: string }> =>
      client.request('GET', `/v1/integrations/${provider}/redirect`),
  },
});