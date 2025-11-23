import type { Serversinc } from '../client';

export const servers = (client: Serversinc) => ({
  command: (serverId: string, body: any) => client.request('POST', `/v1/servers/${serverId}/command`, body),
  commands: {
    list: (serverId: string, params?: { container_id?: string; page?: number }) => {
      const query = new URLSearchParams();
      if (params?.container_id) query.append('container_id', params.container_id);
      if (params?.page) query.append('page', params.page!.toString());
      return client.request('GET', `/v1/servers/${serverId}/commands?${query.toString()}`);
    },
  },
});