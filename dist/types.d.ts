export type User = {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
};
export type UserResponse = {
    user: User;
    emails: Record<string, string>;
};
export type Workspace = {
    id: string;
    name: string;
    slug: string;
    description?: string;
    owner_id: string;
    domain?: string;
    had_trial?: boolean;
    trial_ended_reason?: string;
    trial_ends_at?: string;
    created_at?: string;
    updated_at?: string;
};
export type WorkspaceSubscription = {
    status: string;
    plan: string;
    trial_ends_at?: string;
    id?: string;
    portal_url?: string;
    renews_at?: string;
    amount?: number;
    currency?: string;
    interval?: string;
    ends_at?: string;
    created_at?: string;
    updated_at?: string;
};
export type Server = {
    id: string;
    user_id: string;
    provider: string;
    region: string;
    datacenter?: string;
    ip_v6?: string;
    ip_v4: string;
    cpu: number;
    memory: number;
    disk: number;
    status: 'pending_creation' | 'provisioning' | 'running_setup' | 'active' | string;
    ssh_key_path?: string;
    root_password?: string;
    name: string;
    last_seen?: string;
    secret_key?: string;
    workspace_id: string;
    provider_server_id?: string;
    imported?: boolean;
    auto_update_tugboat?: boolean;
    failed_stage?: string;
    failed_stage_reason?: string;
    created_at?: string;
    updated_at?: string;
};
export type Application = {
    id: string;
    name: string;
    slug: string;
    user_id: string;
    port?: number;
    domain?: string;
    image: string;
    tag: string;
    compose_path?: string;
    auto_deploy?: boolean;
    auto_ssl?: boolean;
    is_production?: boolean;
    deploy_hook: string;
    deploy_secret: string;
    last_deployed_at?: string;
    type: 'docker_image' | 'github' | 'docker_compose';
    repository?: string;
    branch?: string;
    last_deployed_commit?: string;
    github_webhook_id?: number;
    workspace_id: string;
    docker_username?: string;
    docker_password?: string;
    docker_registry?: string;
    deploy_strategy?: string;
    group_id?: string;
    template_id?: string;
    created_at?: string;
    updated_at?: string;
};
export type Container = {
    id: string;
    container_id: string;
    name: string;
    image_name: string;
    image_tag: string;
    image_id: string;
    command?: string;
    status: string;
    ports?: Record<string, any>;
    labels?: Record<string, any>;
    networks?: Record<string, any>;
    mounts?: Record<string, any>;
    volumes?: Record<string, any>;
    environment?: Record<string, any>;
    exposed_ports?: Record<string, any>;
    server_id: string;
    application_id?: string;
    workspace_id: string;
    is_current?: boolean;
    created_at?: string;
    updated_at?: string;
    started_at?: string;
};
export type Alert = {
    id: string;
    resource_type: string;
    resource_id: string;
    key: string;
    operator: string;
    value: string;
    status: string;
    workspace_id: string;
    user_id: string;
    created_at?: string;
    updated_at?: string;
};
export type EnvironmentVariable = {
    id: string;
    key: string;
    value?: string;
    application_id?: string;
    container_id?: string;
    created_at?: string;
    updated_at?: string;
};
export type ApplicationLabel = {
    id: number;
    application_id: number;
    key: string;
    value?: string;
    created_at?: string;
    updated_at?: string;
};
export type ApplicationVolume = {
    id: number;
    application_id: number;
    source: string;
    target: string;
    read_only?: boolean;
    created_at?: string;
    updated_at?: string;
};
export type ApplicationPort = {
    id: number;
    application_id: number;
    host?: number;
    container: number;
    protocol: string;
    created_at?: string;
    updated_at?: string;
};
export type NotificationChannel = {
    id: string;
    name: string;
    type: string;
    identifier: string;
    notifications: any;
    enabled: boolean;
    user_id: string;
    workspace_id: string;
    created_at?: string;
    updated_at?: string;
};
export type IntegrationToken = {
    id: string;
    name: string;
    workspace_id: string;
    connected_by_user_id: string;
    provider: string;
    access_token_url?: string;
    access_token?: string;
    refresh_token?: string;
    extras?: Record<string, any>;
    expires_at?: string;
    external_account_id?: string;
    external_account_name?: string;
    account_type?: string;
    avatar?: string;
    installation_id?: number;
    created_at?: string;
    updated_at?: string;
};
export type Project = {
    id: string;
    name: string;
    description?: string;
    avatar?: string;
    workspace_id: string;
    created_at?: string;
    updated_at?: string;
};
export type Template = {
    id: number;
    name: string;
    slug: string;
    magic_id?: string;
    description?: string;
    visibility?: string;
    version?: string;
    original_compose?: string;
    parsed_json?: Record<string, any>;
    workspace_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
};
export type Subscription = {
    id: string;
    user_id: string;
    type: string;
    stripe_id: string;
    stripe_status: string;
    stripe_price: string;
    quantity: number;
    trial_ends_at?: string;
    ends_at?: string;
    created_at?: string;
    updated_at?: string;
};
export type ApiToken = {
    id: number;
    name: string;
    abilities: string[];
    last_used_at?: string;
    expires_at?: string;
    plainTextToken?: string;
    created_at?: string;
    updated_at?: string;
};
export type Deployment = {
    id: string;
};
export type PaginationMetadata = {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from?: number;
    to?: number;
};
export type PaginatedResponse<T> = {
    data: T[];
    metadata: PaginationMetadata;
};
export type CreateServerRequest = {
    name: string;
    provider: string;
    region?: string;
    datacenter?: string;
    type: string;
    image: string;
    sshKeys?: (string | number)[];
    userData?: string;
    labels?: Record<string, string>;
};
export type CreateApplicationRequest = {
    name: string;
    image: string;
    tag?: string;
    domain?: string;
    port?: number;
    type?: 'docker_image' | 'github' | 'docker_compose';
    repository?: string;
    branch?: string;
    auto_deploy?: boolean;
    auto_ssl?: boolean;
    is_production?: boolean;
    docker_username?: string;
    docker_password?: string;
    docker_registry?: string;
    deploy_strategy?: string;
    template_id?: string;
};
export type CreateAlertRequest = {
    key: string;
    operator: string;
    value: string;
    resource_type: string;
    resource_id: string;
    status?: 'enabled' | 'disabled';
};
export type UpdateAlertRequest = {
    key?: string;
    operator?: string;
    value?: string;
    resource_type?: string;
    resource_id?: string;
    status: 'enabled' | 'disabled';
};
export type CreateNotificationChannelRequest = {
    name: string;
    type: string;
    identifier: string;
    notifications?: any;
    enabled?: boolean;
};
export type UpdateNotificationChannelRequest = {
    name?: string;
    type?: string;
    identifier?: string;
    notifications?: any;
    enabled?: boolean;
};
export type CreateProjectRequest = {
    name: string;
    description?: string;
    avatar?: string;
};
export type AttachResourceRequest = {
    resource_type: string;
    resource_id: string;
};
export type DetachResourceRequest = {
    resource_type: string;
    resource_id: string;
};
export type CreateApiTokenRequest = {
    name: string;
    abilities?: string[];
    expires_at?: string;
};
export type CreateIntegrationRequest = {
    provider: string;
};
export type RunCommandRequest = {
    command: string;
};
export type PullImageRequest = {
    image: string;
};
export type PerformActionRequest = {
    action: string;
};
export type UpdateUserRequest = {
    name?: string;
    email?: string;
};
export type InviteUserRequest = {
    email: string;
    role?: string;
};
export type AcceptInviteRequest = {
    token: string;
};
export type RemoveMemberRequest = {
    userId: string;
};
export type ChangeWorkspaceRequest = {
    workspaceId: string;
};
export type ImportServerRequest = {
    name: string;
    provider: string;
    ip_v4: string;
};
export type ServersListResponse = {
    servers: Server[];
    metadata: PaginationMetadata;
};
export type ApplicationsListResponse = {
    applications: Application[];
    metadata: PaginationMetadata;
};
export type AlertsListResponse = {
    alerts: Alert[];
    metadata: PaginationMetadata;
};
export type NotificationsListResponse = {
    notifications: NotificationChannel[];
    metadata: PaginationMetadata;
};
export type ProjectsListResponse = {
    projects: Project[];
    metadata: PaginationMetadata;
};
export type WorkspacesListResponse = {
    workspaces: Workspace[];
    metadata: PaginationMetadata;
};
export type ApiTokensListResponse = {
    tokens: ApiToken[];
    metadata: PaginationMetadata;
};
export type IntegrationsListResponse = {
    integrations: IntegrationToken[];
    metadata: PaginationMetadata;
};
export type DeploymentsListResponse = {
    deployments: Deployment[];
    metadata: PaginationMetadata;
};
export type ApiResponse<T> = {
    data: T;
    message?: string;
};
export type ErrorResponse = {
    message: string;
    errors?: Record<string, string[]>;
};
export type ProviderRegion = {
    id: string;
    name: string;
    slug: string;
    available: boolean;
};
export type ProviderServerType = {
    id: string;
    name: string;
    slug: string;
    cpu: number;
    memory: number;
    disk: number;
    price: number;
};
export type ProviderDatacenter = {
    id: string;
    name: string;
    slug: string;
    location: string;
};
export type ServerMetrics = {
    cpu_usage?: number;
    memory_usage?: number;
    disk_usage?: number;
    network_in?: number;
    network_out?: number;
    timestamp: string;
};
export type DockerImage = {
    id: string;
    repository: string;
    tag: string;
    size: number;
    created: string;
};
export type ContainerAction = 'start' | 'stop' | 'restart' | 'pause' | 'unpause';
export type CommandHistory = {
    id: string;
    command: string;
    output?: string;
    exit_code?: number;
    server_id: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
};
export type ContainerHistory = {
    id: string;
    container_id: string;
    action: string;
    status: string;
    created_at?: string;
};
export type ChannelHistory = {
    id: string;
    channel_id: string;
    message: string;
    status: 'sent' | 'failed';
    created_at?: string;
};
export type ProjectResource = {
    id: string;
    project_id: string;
    resource_type: string;
    resource_id: string;
    created_at?: string;
    updated_at?: string;
};
export type TemplateService = {
    id: number;
    template_id: number;
    name: string;
    image: string;
    created_at?: string;
    updated_at?: string;
};
export type Payload = {
    id: string;
    type: string;
    data: Record<string, any>;
    actor_type?: string;
    actor_id?: string;
    created_at?: string;
    updated_at?: string;
};
export type WorkspaceMember = {
    id: string;
    workspace_id: string;
    user_id: string;
    role: string;
    created_at?: string;
    updated_at?: string;
};
export type ServerInvite = {
    id: string;
    token: string;
    server_id?: string;
    expires_at?: string;
    created_at?: string;
    updated_at?: string;
};
export type WorkspaceInvite = {
    id: string;
    workspace_id: string;
    email: string;
    token: string;
    role: string;
    expires_at?: string;
    accepted_at?: string;
    created_at?: string;
    updated_at?: string;
};
