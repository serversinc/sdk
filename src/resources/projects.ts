import type { Serversinc } from '../client';
import type { Project, CreateProjectRequest, AttachResourceRequest, DetachResourceRequest, ProjectsListResponse } from '../types';

export const projects = (client: Serversinc) => ({
  list: (): Promise<ProjectsListResponse> => client.request('GET', '/v1/projects'),
  create: (data: CreateProjectRequest): Promise<Project> => client.request('POST', '/v1/projects', data),
  get: (id: string): Promise<Project> => client.request('GET', `/v1/projects/${id}`),
  delete: (id: string): Promise<void> => client.request('DELETE', `/v1/projects/${id}`),
  attach: (id: string, data: AttachResourceRequest): Promise<void> =>
    client.request('POST', `/v1/projects/${id}/attach`, data),
  detach: (id: string, data: DetachResourceRequest): Promise<void> =>
    client.request('POST', `/v1/projects/${id}/detach`, data),
});