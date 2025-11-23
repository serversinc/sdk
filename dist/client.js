import { apiTokens } from './resources/apiTokens';
import { alerts } from './resources/alerts';
import { applications } from './resources/applications';
import { servers } from './resources/servers';
import { events } from './resources/events';
export class ApiError extends Error {
    constructor(status, statusText, body) {
        super(`HTTP ${status}: ${statusText}${body ? ` - ${body}` : ''}`);
        this.status = status;
        this.statusText = statusText;
        this.body = body;
        this.name = 'ApiError';
    }
}
export class Serversinc {
    constructor(baseURL, token, options = {}) {
        // Resource APIs
        this.apiTokens = apiTokens(this);
        this.alerts = alerts(this);
        this.applications = applications(this);
        this.servers = servers(this);
        this.events = events(this);
        this.baseURL = baseURL.replace(/\/$/, ''); // Remove trailing slash
        this.token = token;
        this.timeout = options.timeout ?? 30000; // 30 seconds default
        this.retries = options.retries ?? 3;
    }
    setToken(token) {
        this.token = token;
    }
    async request(method, path, body, extraHeaders, authenticated = true) {
        const url = `${this.baseURL}${path}`;
        for (let attempt = 0; attempt <= this.retries; attempt++) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), this.timeout);
                const headers = {
                    ...extraHeaders,
                };
                if (authenticated) {
                    headers['Authorization'] = `Bearer ${this.token}`;
                }
                if (body && !headers['Content-Type']) {
                    headers['Content-Type'] = 'application/json';
                }
                const response = await fetch(url, {
                    method,
                    headers,
                    body: body ? JSON.stringify(body) : undefined,
                    signal: controller.signal,
                });
                clearTimeout(timeoutId);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new ApiError(response.status, response.statusText, errorText);
                }
                if (response.status === 204) {
                    return undefined;
                }
                return response.json();
            }
            catch (error) {
                if (error instanceof ApiError) {
                    throw error;
                }
                if (attempt === this.retries) {
                    throw error;
                }
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
            }
        }
        throw new Error('Unexpected error in request loop');
    }
}
Serversinc.VERSION = '1.0.0';
