import type { Serversinc } from '../client';
import type {
  Workspace,
  WorkspaceSubscription,
  InviteUserRequest,
  AcceptInviteRequest,
  RemoveMemberRequest,
  ChangeWorkspaceRequest,
  WorkspacesListResponse,
} from '../types';

export const workspaces = (client: Serversinc) => ({
  list: (): Promise<WorkspacesListResponse> => client.request('GET', '/v1/workspaces'),
  current: (): Promise<Workspace> => client.request('GET', '/v1/workspaces/current'),
  change: (data: ChangeWorkspaceRequest): Promise<void> => client.request('POST', '/v1/workspaces/change', data),
  invite: (data: InviteUserRequest): Promise<void> => client.request('POST', '/v1/workspaces/invite', data),
  acceptInvite: (data: AcceptInviteRequest): Promise<void> => client.request('POST', '/v1/workspaces/invite/accept', data),
  removeMember: (data: RemoveMemberRequest): Promise<void> => client.request('POST', '/v1/workspaces/members/remove', data),
  subscription: (): Promise<WorkspaceSubscription> => client.request('GET', '/v1/workspaces/subscription'),
});