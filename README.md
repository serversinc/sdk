# Serversinc API SDK

A fully typed TypeScript SDK for the Serversinc API, built with fetch and OpenAPI-generated types. Compatible with JavaScript and TypeScript.

## Installation

```bash
npm install @serversinc/sdk
# or copy the sdk directory to your project
```

## Usage

```typescript
import { Serversinc } from '@serversinc/sdk';
import type {
  Application,
  Alert,
  Server,
  EnvironmentVariable,
  ApplicationLabel
} from '@serversinc/sdk';

const client = new Serversinc('https://api.serversinc.io', 'your-token', {
  timeout: 30000,
  retries: 3
});

// Fully typed responses
const apps: Application[] = await client.applications.list();
const servers: Server[] = await client.servers.list();
const alerts: Alert[] = await client.alerts.list();

// Create resources with type safety
const newApp = await client.applications.create({
  name: 'My App',
  type: 'docker_image',
  image: 'nginx:latest'
});

// Manage application resources
const envVars: EnvironmentVariable[] = await client.applications.env.list('app-id');
const labels: ApplicationLabel[] = await client.applications.labels.list('app-id');
```

## API Resources

- `client.apiTokens` - API token management
- `client.alerts` - Alert configuration
- `client.applications` - Application lifecycle
  - `.env`, `.labels`, `.volumes`, `.ports`, `.deployments` - Sub-resources
- `client.servers` - Server commands
- `client.notifications` - Notification channels
- `client.events` - Webhooks

## Features

- **Type Safety**: Full TypeScript types from OpenAPI spec
- **Timeout & Retries**: Configurable with exponential backoff
- **Error Handling**: Custom `ApiError` class
- **Resource Grouping**: Methods organized by API resource

## Available Types

Import these types for full type safety:

- `Application` - Application configuration
- `Alert` - Monitoring alerts
- `ApiToken` - API access tokens
- `Server` - Server instances
- `NotificationChannel` - Notification settings
- `EnvironmentVariable` - App environment variables
- `ApplicationLabel` - Docker labels
- `ApplicationVolume` - Volume configurations
- `ApplicationPort` - Port mappings

All types are derived from the actual Laravel models for accuracy.

## Building

To regenerate types from the OpenAPI spec:

```bash
npm run generate-types
```

To build the project:

```bash
npm run build
```