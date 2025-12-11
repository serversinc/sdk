import type { Serversinc } from '../client';
import type { ProviderRegion, ProviderServerType, ProviderDatacenter, CreateServerRequest } from '../types';

export const providers = (client: Serversinc) => ({
  regions: (provider: string): Promise<ProviderRegion[]> =>
    client.request('GET', `/v1/providers/${provider}/regions`),
  serverTypes: (provider: string): Promise<ProviderServerType[]> =>
    client.request('GET', `/v1/providers/${provider}/server-types`),
  datacenters: (provider: string): Promise<ProviderDatacenter[]> =>
    client.request('GET', `/v1/providers/${provider}/datacenters`),
  createServer: (provider: string, data: CreateServerRequest): Promise<any> =>
    client.request('POST', `/v1/providers/${provider}/servers`, data),
});