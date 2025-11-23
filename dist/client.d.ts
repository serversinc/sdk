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
        list: () => Promise<unknown>;
        create: (body: any) => Promise<unknown>;
        delete: (tokenId: number) => Promise<unknown>;
    };
    alerts: {
        list: () => Promise<unknown>;
        create: (body: any) => Promise<unknown>;
        get: (alertId: string) => Promise<unknown>;
        update: (alertId: string, body: any) => Promise<unknown>;
        delete: (alertId: string) => Promise<unknown>;
        toggle: (alertId: string) => Promise<unknown>;
    };
    applications: {
        list: () => Promise<unknown>;
        create: (body: any) => Promise<unknown>;
        get: (applicationId: string) => Promise<unknown>;
        update: (applicationId: string, body?: any) => Promise<unknown>;
        delete: (applicationId: string) => Promise<unknown>;
        env: {
            list: (applicationId: string) => Promise<unknown>;
            create: (applicationId: string, body: any) => Promise<unknown>;
            update: (applicationId: string, variableId: string, body: any) => Promise<unknown>;
            delete: (applicationId: string, variableId: string) => Promise<unknown>;
        };
        labels: {
            list: (applicationId: string) => Promise<unknown>;
            create: (applicationId: string, body: any) => Promise<unknown>;
            update: (applicationId: string, labelId: string, body: any) => Promise<unknown>;
            delete: (applicationId: string, labelId: string) => Promise<unknown>;
        };
        volumes: {
            list: (applicationId: string) => Promise<unknown>;
            create: (applicationId: string, body: any) => Promise<unknown>;
            update: (applicationId: string, volumeId: string, body: any) => Promise<unknown>;
            delete: (applicationId: string, volumeId: string) => Promise<unknown>;
        };
        ports: {
            list: (applicationId: string) => Promise<unknown>;
            create: (applicationId: string, body: any) => Promise<unknown>;
            delete: (applicationId: string, portId: string) => Promise<unknown>;
        };
    };
    servers: {
        command: (serverId: string, body: any) => Promise<unknown>;
        commands: {
            list: (serverId: string, params?: {
                container_id?: string;
                page?: number;
            }) => Promise<unknown>;
        };
    };
    events: {
        redeploy: (hook: string, headers: {
            "X-Deploy-Secret": string;
        }) => Promise<unknown>;
    };
}
