import type { Serversinc } from '../client';

export const applications = (client: Serversinc) => ({
  list: () => client.request('GET', '/v1/applications'),
  create: (body: any) => client.request('POST', '/v1/applications', body),
  get: (applicationId: string) => client.request('GET', `/v1/applications/${applicationId}`),
  update: (applicationId: string, body?: any) => client.request('PUT', `/v1/applications/${applicationId}`, body),
  delete: (applicationId: string) => client.request('DELETE', `/v1/applications/${applicationId}`),
  env: {
    list: (applicationId: string) => client.request('GET', `/v1/applications/${applicationId}/env`),
    create: (applicationId: string, body: any) => client.request('POST', `/v1/applications/${applicationId}/env`, body),
    update: (applicationId: string, variableId: string, body: any) => client.request('PUT', `/v1/applications/${applicationId}/env/${variableId}`, body),
    delete: (applicationId: string, variableId: string) => client.request('DELETE', `/v1/applications/${applicationId}/env/${variableId}`),
  },
  labels: {
    list: (applicationId: string) => client.request('GET', `/v1/applications/${applicationId}/labels`),
    create: (applicationId: string, body: any) => client.request('POST', `/v1/applications/${applicationId}/labels`, body),
    update: (applicationId: string, labelId: string, body: any) => client.request('PUT', `/v1/applications/${applicationId}/labels/${labelId}`, body),
    delete: (applicationId: string, labelId: string) => client.request('DELETE', `/v1/applications/${applicationId}/labels/${labelId}`),
  },
  volumes: {
    list: (applicationId: string) => client.request('GET', `/v1/applications/${applicationId}/volumes`),
    create: (applicationId: string, body: any) => client.request('POST', `/v1/applications/${applicationId}/volumes`, body),
    update: (applicationId: string, volumeId: string, body: any) => client.request('PUT', `/v1/applications/${applicationId}/volumes/${volumeId}`, body),
    delete: (applicationId: string, volumeId: string) => client.request('DELETE', `/v1/applications/${applicationId}/volumes/${volumeId}`),
  },
  ports: {
    list: (applicationId: string) => client.request('GET', `/v1/applications/${applicationId}/ports`),
    create: (applicationId: string, body: any) => client.request('POST', `/v1/applications/${applicationId}/ports`, body),
    delete: (applicationId: string, portId: string) => client.request('DELETE', `/v1/applications/${applicationId}/ports/${portId}`),
  },
});