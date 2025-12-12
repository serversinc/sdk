import type { Serversinc } from '../client';
import type { UserResponse, UpdateUserRequest } from '../types';

export const user = (client: Serversinc) => ({
  get: (): Promise<UserResponse> => client.request('GET', '/v1/user'),
  update: (data: UpdateUserRequest): Promise<UserResponse> => client.request('POST', '/v1/user', data),
});