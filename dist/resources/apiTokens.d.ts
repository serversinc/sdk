import type { Serversinc } from '../client';
export declare const apiTokens: (client: Serversinc) => {
    list: () => Promise<unknown>;
    create: (body: any) => Promise<unknown>;
    delete: (tokenId: number) => Promise<unknown>;
};
