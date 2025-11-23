export const alerts = (client) => ({
    list: () => client.request('GET', '/v1/alerts'),
    create: (body) => client.request('POST', '/v1/alerts', body),
    get: (alertId) => client.request('GET', `/v1/alerts/${alertId}`),
    update: (alertId, body) => client.request('PUT', `/v1/alerts/${alertId}`, body),
    delete: (alertId) => client.request('DELETE', `/v1/alerts/${alertId}`),
    toggle: (alertId) => client.request('PUT', `/v1/alerts/${alertId}/toggle`),
});
