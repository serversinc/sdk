import type { Serversinc } from '../client';

export const github = (client: Serversinc) => ({
  branches: (owner: string, repository: string): Promise<{ name: string; sha: string }[]> =>
    client.request('GET', `/v1/github/branches/${owner}/${repository}`),
});