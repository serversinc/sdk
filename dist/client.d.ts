export declare class ApiError extends Error {
    status: number;
    statusText: string;
    body?: string | undefined;
    constructor(status: number, statusText: string, body?: string | undefined);
}
export declare class Serversinc {
    private baseURL;
    private token;
    private timeout;
    private retries;
    static readonly VERSION = "1.0.0";
    constructor(baseURL: string, token: string, options?: {
        timeout?: number;
        retries?: number;
    });
    setToken(token: string): void;
    request<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, body?: any, extraHeaders?: Record<string, string>, authenticated?: boolean): Promise<T>;
    apiTokens: {
        list: () => Promise<import("./types").ApiTokensListResponse>;
        create: (data: import("./types").CreateApiTokenRequest) => Promise<{
            token: import("./types").ApiToken;
            plainTextToken: string;
        }>;
        delete: (tokenId: number) => Promise<void>;
    };
    alerts: {
        list: () => Promise<import("./types").AlertsListResponse>;
        create: (data: import("./types").CreateAlertRequest) => Promise<import("./types").Alert>;
        get: (alertId: string) => Promise<import("./types").Alert>;
        update: (alertId: string, data: import("./types").UpdateAlertRequest) => Promise<import("./types").Alert>;
        delete: (alertId: string) => Promise<void>;
        toggle: (alertId: string) => Promise<{
            id: string;
            status: string;
        }>;
    };
    applications: {
        list: () => Promise<import("./types").ApplicationsListResponse>;
        create: (data: import("./types").CreateApplicationRequest) => Promise<import("./types").Application>;
        get: (applicationId: string) => Promise<import("./types").Application>;
        update: (applicationId: string, data: Partial<import("./types").Application>) => Promise<import("./types").Application>;
        delete: (applicationId: string) => Promise<void>;
        containers: {
            list: (applicationId: string) => Promise<import("./types").Container[]>;
        };
        env: {
            list: (applicationId: string) => Promise<import("./types").EnvironmentVariable[]>;
            create: (applicationId: string, data: {
                key: string;
                value?: string;
            }) => Promise<import("./types").EnvironmentVariable>;
            update: (applicationId: string, variableId: string, data: {
                key: string;
                value?: string;
            }) => Promise<import("./types").EnvironmentVariable>;
            delete: (applicationId: string, variableId: string) => Promise<void>;
        };
        labels: {
            list: (applicationId: string) => Promise<import("./types").ApplicationLabel[]>;
            create: (applicationId: string, data: {
                key: string;
                value?: string;
            }) => Promise<import("./types").ApplicationLabel>;
            update: (applicationId: string, labelId: string, data: {
                key: string;
                value?: string;
            }) => Promise<import("./types").ApplicationLabel>;
            delete: (applicationId: string, labelId: string) => Promise<void>;
        };
        volumes: {
            list: (applicationId: string) => Promise<import("./types").ApplicationVolume[]>;
            create: (applicationId: string, data: {
                source: string;
                target: string;
                read_only?: boolean;
            }) => Promise<import("./types").ApplicationVolume>;
            update: (applicationId: string, volumeId: string, data: {
                source: string;
                target: string;
                read_only?: boolean;
            }) => Promise<import("./types").ApplicationVolume>;
            delete: (applicationId: string, volumeId: string) => Promise<void>;
        };
        ports: {
            list: (applicationId: string) => Promise<import("./types").ApplicationPort[]>;
            create: (applicationId: string, data: {
                host?: number;
                container: number;
                protocol: string;
            }) => Promise<import("./types").ApplicationPort>;
            delete: (applicationId: string, portId: string) => Promise<void>;
        };
    };
    servers: {
        list: () => Promise<import("./types").ServersListResponse>;
        create: (data: import("./types").CreateServerRequest) => Promise<import("./types").Server>;
        get: (serverId: string) => Promise<import("./types").Server>;
        update: (serverId: string, data: Partial<import("./types").Server>) => Promise<import("./types").Server>;
        delete: (serverId: string) => Promise<void>;
        import: (data: import("./types").ImportServerRequest) => Promise<import("./types").Server>;
        getKey: (serverId: string) => Promise<{
            key: string;
        }>;
        setup: (serverId: string, data?: any) => Promise<void>;
        runCommand: (serverId: string, data: import("./types").RunCommandRequest) => Promise<{
            output: string;
            exit_code: number;
        }>;
        listCommands: (serverId: string) => Promise<import("./types").CommandHistory[]>;
        containers: {
            list: (serverId: string) => Promise<import("./types").Container[]>;
            get: (serverId: string, containerId: string) => Promise<import("./types").Container>;
            runCommand: (serverId: string, containerId: string, data: import("./types").RunCommandRequest) => Promise<{
                output: string;
                exit_code: number;
            }>;
            performAction: (serverId: string, containerId: string, data: import("./types").PerformActionRequest) => Promise<void>;
            delete: (serverId: string, containerId: string) => Promise<void>;
        };
        images: {
            list: (serverId: string) => Promise<import("./types").DockerImage[]>;
            pull: (serverId: string, data: import("./types").PullImageRequest) => Promise<void>;
            remove: (serverId: string, imageId: string) => Promise<void>;
        };
        metrics: (serverId: string, params?: {
            since?: string;
        }) => Promise<import("./types").ServerMetrics[]>;
    };
    user: {
        get: () => Promise<import("./types").User>;
        update: (data: import("./types").UpdateUserRequest) => Promise<import("./types").User>;
    };
    workspaces: {
        list: () => Promise<import("./types").WorkspacesListResponse>;
        current: () => Promise<import("./types").Workspace>;
        change: (data: import("./types").ChangeWorkspaceRequest) => Promise<void>;
        invite: (data: import("./types").InviteUserRequest) => Promise<void>;
        acceptInvite: (data: import("./types").AcceptInviteRequest) => Promise<void>;
        removeMember: (data: import("./types").RemoveMemberRequest) => Promise<void>;
        subscription: () => Promise<import("./types").WorkspaceSubscription>;
    };
    integrations: {
        list: () => Promise<import("./types").IntegrationsListResponse>;
        create: (data: import("./types").CreateIntegrationRequest) => Promise<import("./types").IntegrationToken>;
        delete: (id: string) => Promise<void>;
        github: {
            create: (provider: string, data?: any) => Promise<import("./types").IntegrationToken>;
            redirect: (provider: string) => Promise<{
                url: string;
            }>;
        };
    };
    providers: {
        regions: (provider: string) => Promise<import("./types").ProviderRegion[]>;
        serverTypes: (provider: string) => Promise<import("./types").ProviderServerType[]>;
        datacenters: (provider: string) => Promise<import("./types").ProviderDatacenter[]>;
        createServer: (provider: string, data: import("./types").CreateServerRequest) => Promise<any>;
    };
    deployments: {
        list: () => Promise<import("./types").DeploymentsListResponse>;
        get: (id: string) => Promise<import("./types").Deployment>;
    };
    notifications: {
        types: () => Promise<string[]>;
        list: () => Promise<import("./types").NotificationsListResponse>;
        create: (data: import("./types").CreateNotificationChannelRequest) => Promise<import("./types").NotificationChannel>;
        get: (resourceId: string) => Promise<import("./types").NotificationChannel>;
        update: (resourceId: string, data: import("./types").UpdateNotificationChannelRequest) => Promise<import("./types").NotificationChannel>;
        delete: (resourceId: string) => Promise<void>;
        history: {
            list: (resourceId: string) => Promise<import("./types").ChannelHistory[]>;
        };
        toggle: (resourceId: string) => Promise<{
            id: string;
            enabled: boolean;
        }>;
    };
    projects: {
        list: () => Promise<import("./types").ProjectsListResponse>;
        create: (data: import("./types").CreateProjectRequest) => Promise<import("./types").Project>;
        get: (id: string) => Promise<import("./types").Project>;
        delete: (id: string) => Promise<void>;
        attach: (id: string, data: import("./types").AttachResourceRequest) => Promise<void>;
        detach: (id: string, data: import("./types").DetachResourceRequest) => Promise<void>;
    };
    templates: {
        get: (id: string) => Promise<import("./types").Template>;
    };
    github: {
        branches: (owner: string, repository: string) => Promise<{
            name: string;
            sha: string;
        }[]>;
    };
}
