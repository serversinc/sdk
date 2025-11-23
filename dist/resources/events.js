export const events = (client) => ({
    redeploy: (hook, headers) => client.request('POST', `/v1/events/${hook}`, undefined, headers, false),
});
