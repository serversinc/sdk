import type { Serversinc } from '../client';
export declare const servers: (client: Serversinc) => {
    command: (serverId: string, body: any) => Promise<unknown>;
    commands: {
        list: (serverId: string, params?: {
            container_id?: string;
            page?: number;
        }) => Promise<unknown>;
    };
};
