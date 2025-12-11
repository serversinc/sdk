import type { Serversinc } from '../client';
import type {
  Server,
  CreateServerRequest,
  ImportServerRequest,
  RunCommandRequest,
  Container,
  DockerImage,
  PullImageRequest,
  PerformActionRequest,
  ServerMetrics,
  PaginatedResponse,
  CommandHistory,
} from '../types';

export const servers = (client: Serversinc) => ({
  // Server CRUD
  list: (): Promise<Server[]> => client.request('GET', '/v1/servers'),
  create: (data: CreateServerRequest): Promise<Server> => client.request('POST', '/v1/servers', data),
  get: (serverId: string): Promise<Server> => client.request('GET', `/v1/servers/${serverId}`),
  update: (serverId: string, data: Partial<Server>): Promise<Server> => client.request('PUT', `/v1/servers/${serverId}`, data),
  delete: (serverId: string): Promise<void> => client.request('DELETE', `/v1/servers/${serverId}`),

  // Server Import
  import: (data: ImportServerRequest): Promise<Server> => client.request('POST', '/v1/servers/import', data),

  // Server Key
  getKey: (serverId: string): Promise<{ key: string }> => client.request('GET', `/v1/servers/${serverId}/key`),

  // Server Setup
  setup: (serverId: string, data?: any): Promise<void> => client.request('POST', `/v1/servers/${serverId}/setup`, data),

  // Server Commands
  runCommand: (serverId: string, data: RunCommandRequest): Promise<{ output: string; exit_code: number }> =>
    client.request('POST', `/v1/servers/${serverId}/command`, data),
  listCommands: (serverId: string): Promise<CommandHistory[]> =>
    client.request('GET', `/v1/servers/${serverId}/commands`),

  // Containers
  containers: {
    list: (serverId: string): Promise<Container[]> => client.request('GET', `/v1/servers/${serverId}/containers`),
    get: (serverId: string, containerId: string): Promise<Container> =>
      client.request('GET', `/v1/servers/${serverId}/containers/${containerId}`),
    runCommand: (serverId: string, containerId: string, data: RunCommandRequest): Promise<{ output: string; exit_code: number }> =>
      client.request('POST', `/v1/servers/${serverId}/containers/${containerId}/command`, data),
    performAction: (serverId: string, containerId: string, data: PerformActionRequest): Promise<void> =>
      client.request('POST', `/v1/servers/${serverId}/containers/${containerId}/action`, data),
    delete: (serverId: string, containerId: string): Promise<void> =>
      client.request('DELETE', `/v1/servers/${serverId}/containers/${containerId}`),
  },

  // Docker Images
  images: {
    list: (serverId: string): Promise<DockerImage[]> => client.request('GET', `/v1/servers/${serverId}/images`),
    pull: (serverId: string, data: PullImageRequest): Promise<void> =>
      client.request('POST', `/v1/servers/${serverId}/images`, data),
    remove: (serverId: string, imageId: string): Promise<void> =>
      client.request('DELETE', `/v1/servers/${serverId}/image/${imageId}`),
  },

  // Metrics
  metrics: (serverId: string, params?: { since?: string }): Promise<ServerMetrics[]> => {
    const query = new URLSearchParams();
    if (params?.since) query.append('since', params.since);
    return client.request('GET', `/v1/metrics/servers/${serverId}?${query.toString()}`);
  },
});