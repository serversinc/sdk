import type { Serversinc } from '../client';
export declare const events: (client: Serversinc) => {
    redeploy: (hook: string, headers: {
        "X-Deploy-Secret": string;
    }) => Promise<unknown>;
};
