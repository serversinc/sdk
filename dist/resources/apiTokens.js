export const apiTokens = (client) => ({
    list: () => client.request('GET', '/v1/api-tokens'),
    create: (body) => client.request('POST', '/v1/api-tokens', body),
    delete: (tokenId) => client.request('DELETE', `/v1/api-tokens/${tokenId}`),
});
