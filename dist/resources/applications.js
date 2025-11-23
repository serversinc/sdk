export const applications = (client) => ({
    list: () => client.request('GET', '/v1/applications'),
    create: (body) => client.request('POST', '/v1/applications', body),
    get: (applicationId) => client.request('GET', `/v1/applications/${applicationId}`),
    update: (applicationId, body) => client.request('PUT', `/v1/applications/${applicationId}`, body),
    delete: (applicationId) => client.request('DELETE', `/v1/applications/${applicationId}`),
    env: {
        list: (applicationId) => client.request('GET', `/v1/applications/${applicationId}/env`),
        create: (applicationId, body) => client.request('POST', `/v1/applications/${applicationId}/env`, body),
        update: (applicationId, variableId, body) => client.request('PUT', `/v1/applications/${applicationId}/env/${variableId}`, body),
        delete: (applicationId, variableId) => client.request('DELETE', `/v1/applications/${applicationId}/env/${variableId}`),
    },
    labels: {
        list: (applicationId) => client.request('GET', `/v1/applications/${applicationId}/labels`),
        create: (applicationId, body) => client.request('POST', `/v1/applications/${applicationId}/labels`, body),
        update: (applicationId, labelId, body) => client.request('PUT', `/v1/applications/${applicationId}/labels/${labelId}`, body),
        delete: (applicationId, labelId) => client.request('DELETE', `/v1/applications/${applicationId}/labels/${labelId}`),
    },
    volumes: {
        list: (applicationId) => client.request('GET', `/v1/applications/${applicationId}/volumes`),
        create: (applicationId, body) => client.request('POST', `/v1/applications/${applicationId}/volumes`, body),
        update: (applicationId, volumeId, body) => client.request('PUT', `/v1/applications/${applicationId}/volumes/${volumeId}`, body),
        delete: (applicationId, volumeId) => client.request('DELETE', `/v1/applications/${applicationId}/volumes/${volumeId}`),
    },
    ports: {
        list: (applicationId) => client.request('GET', `/v1/applications/${applicationId}/ports`),
        create: (applicationId, body) => client.request('POST', `/v1/applications/${applicationId}/ports`, body),
        delete: (applicationId, portId) => client.request('DELETE', `/v1/applications/${applicationId}/ports/${portId}`),
    },
});
