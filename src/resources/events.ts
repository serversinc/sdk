import type { Serversinc } from '../client';

export const events = (client: Serversinc) => ({
  redeploy: (hook: string, headers: { 'X-Deploy-Secret': string }) =>
    client.request('POST', `/v1/events/${hook}`, undefined, headers, false),
});