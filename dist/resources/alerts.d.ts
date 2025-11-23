import type { Serversinc } from '../client';
export declare const alerts: (client: Serversinc) => {
    list: () => Promise<unknown>;
    create: (body: any) => Promise<unknown>;
    get: (alertId: string) => Promise<unknown>;
    update: (alertId: string, body: any) => Promise<unknown>;
    delete: (alertId: string) => Promise<unknown>;
    toggle: (alertId: string) => Promise<unknown>;
};
