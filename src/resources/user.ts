import type { Serversinc } from '../client';
import type { User, UpdateUserRequest } from '../types';

export const user = (client: Serversinc) => ({
  get: (): Promise<User> => client.request('GET', '/v1/user'),
  update: (data: UpdateUserRequest): Promise<User> => client.request('POST', '/v1/user', data),
});