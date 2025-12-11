import type { Serversinc } from '../client';
import type {
  Application,
  CreateApplicationRequest,
  Container,
  EnvironmentVariable,
  ApplicationLabel,
  ApplicationVolume,
  ApplicationPort,
} from '../types';

export const applications = (client: Serversinc) => ({
  // Application CRUD
  list: (): Promise<Application[]> => client.request('GET', '/v1/applications'),
  create: (data: CreateApplicationRequest): Promise<Application> => client.request('POST', '/v1/applications', data),
  get: (applicationId: string): Promise<Application> => client.request('GET', `/v1/applications/${applicationId}`),
  update: (applicationId: string, data: Partial<Application>): Promise<Application> =>
    client.request('PUT', `/v1/applications/${applicationId}`, data),
  delete: (applicationId: string): Promise<void> => client.request('DELETE', `/v1/applications/${applicationId}`),

  // Containers
  containers: {
    list: (applicationId: string): Promise<Container[]> =>
      client.request('GET', `/v1/applications/${applicationId}/containers`),
  },

  // Environment Variables
  env: {
    list: (applicationId: string): Promise<EnvironmentVariable[]> =>
      client.request('GET', `/v1/applications/${applicationId}/env`),
    create: (applicationId: string, data: { key: string; value?: string }): Promise<EnvironmentVariable> =>
      client.request('POST', `/v1/applications/${applicationId}/env`, data),
    update: (applicationId: string, variableId: string, data: { key: string; value?: string }): Promise<EnvironmentVariable> =>
      client.request('PUT', `/v1/applications/${applicationId}/env/${variableId}`, data),
    delete: (applicationId: string, variableId: string): Promise<void> =>
      client.request('DELETE', `/v1/applications/${applicationId}/env/${variableId}`),
  },

  // Labels
  labels: {
    list: (applicationId: string): Promise<ApplicationLabel[]> =>
      client.request('GET', `/v1/applications/${applicationId}/labels`),
    create: (applicationId: string, data: { key: string; value?: string }): Promise<ApplicationLabel> =>
      client.request('POST', `/v1/applications/${applicationId}/labels`, data),
    update: (applicationId: string, labelId: string, data: { key: string; value?: string }): Promise<ApplicationLabel> =>
      client.request('PUT', `/v1/applications/${applicationId}/labels/${labelId}`, data),
    delete: (applicationId: string, labelId: string): Promise<void> =>
      client.request('DELETE', `/v1/applications/${applicationId}/labels/${labelId}`),
  },

  // Volumes
  volumes: {
    list: (applicationId: string): Promise<ApplicationVolume[]> =>
      client.request('GET', `/v1/applications/${applicationId}/volumes`),
    create: (applicationId: string, data: { source: string; target: string; read_only?: boolean }): Promise<ApplicationVolume> =>
      client.request('POST', `/v1/applications/${applicationId}/volumes`, data),
    update: (applicationId: string, volumeId: string, data: { source: string; target: string; read_only?: boolean }): Promise<ApplicationVolume> =>
      client.request('PUT', `/v1/applications/${applicationId}/volumes/${volumeId}`, data),
    delete: (applicationId: string, volumeId: string): Promise<void> =>
      client.request('DELETE', `/v1/applications/${applicationId}/volumes/${volumeId}`),
  },

  // Ports
  ports: {
    list: (applicationId: string): Promise<ApplicationPort[]> =>
      client.request('GET', `/v1/applications/${applicationId}/ports`),
    create: (applicationId: string, data: { host?: number; container: number; protocol: string }): Promise<ApplicationPort> =>
      client.request('POST', `/v1/applications/${applicationId}/ports`, data),
    delete: (applicationId: string, portId: string): Promise<void> =>
      client.request('DELETE', `/v1/applications/${applicationId}/ports/${portId}`),
  },
});