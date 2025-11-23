import type { Serversinc } from '../client';

export const apiTokens = (client: Serversinc) => ({
  list: () => client.request('GET', '/v1/api-tokens'),
  create: (body: any) => client.request('POST', '/v1/api-tokens', body),
  delete: (tokenId: number) => client.request('DELETE', `/v1/api-tokens/${tokenId}`),
});