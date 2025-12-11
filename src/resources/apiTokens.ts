import type { Serversinc } from '../client';
import type { ApiToken, CreateApiTokenRequest, ApiTokensListResponse } from '../types';

export const apiTokens = (client: Serversinc) => ({
  list: (): Promise<ApiTokensListResponse> => client.request('GET', '/v1/api-tokens'),
  create: (data: CreateApiTokenRequest): Promise<{ token: ApiToken; plainTextToken: string }> =>
    client.request('POST', '/v1/api-tokens', data),
  delete: (tokenId: number): Promise<void> => client.request('DELETE', `/v1/api-tokens/${tokenId}`),
});