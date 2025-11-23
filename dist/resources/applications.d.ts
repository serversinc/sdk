import type { Serversinc } from '../client';
export declare const applications: (client: Serversinc) => {
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
