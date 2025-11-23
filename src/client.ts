import { apiTokens } from './resources/apiTokens';
import { alerts } from './resources/alerts';
import { applications } from './resources/applications';
import { servers } from './resources/servers';
import { events } from './resources/events';

export class ApiError extends Error {
  constructor(public status: number, public statusText: string, public body?: string) {
    super(`HTTP ${status}: ${statusText}${body ? ` - ${body}` : ''}`);
    this.name = 'ApiError';
  }
}

export class Serversinc {
  private baseURL: string;
  private token: string;
  private timeout: number;
  private retries: number;

  static readonly VERSION = '1.0.0';

  constructor(baseURL: string, token: string, options: { timeout?: number; retries?: number } = {}) {
    this.baseURL = baseURL.replace(/\/$/, ''); // Remove trailing slash
    this.token = token;
    this.timeout = options.timeout ?? 30000; // 30 seconds default
    this.retries = options.retries ?? 3;
  }

  setToken(token: string) {
    this.token = token;
  }

  public async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    body?: any,
    extraHeaders?: Record<string, string>,
    authenticated: boolean = true
  ): Promise<T> {
    const url = `${this.baseURL}${path}`;

    for (let attempt = 0; attempt <= this.retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const headers: Record<string, string> = {
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
          return undefined as T;
        }

        return response.json();
      } catch (error) {
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

  // Resource APIs
  apiTokens     = apiTokens(this);
  alerts        = alerts(this);
  applications  = applications(this);
  servers       = servers(this);
  events        = events(this);
}