import type { Serversinc } from '../client';
import type { Template } from '../types';

export const templates = (client: Serversinc) => ({
  get: (id: string): Promise<Template> => client.request('GET', `/v1/templates/${id}`),
});