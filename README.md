# Serversinc API SDK

A comprehensive, fully-typed TypeScript SDK for the Serversinc API. Built with modern TypeScript, featuring 50+ types derived directly from Laravel models and complete API coverage across 12+ resources.

## Installation

```bash
npm install @serversinc/sdk
```

## Quick Start

```typescript
import { Serversinc } from '@serversinc/sdk';

const client = new Serversinc('https://api.serversinc.io', 'your-token', {
  timeout: 30000,
  retries: 3
});

// List all your servers
const servers = await client.servers.list();

// Create a new application
const app = await client.applications.create({
  name: 'My Web App',
  type: 'docker_image',
  image: 'nginx:latest',
  domain: 'myapp.example.com'
});

// Manage environment variables
await client.applications.env.create(app.id, {
  key: 'NODE_ENV',
  value: 'production'
});

// Deploy to a server
await client.servers.runCommand(app.server_id, {
  command: 'docker-compose up -d'
});
```

## API Resources

The SDK provides complete coverage of the Serversinc API with the following resources:

### Core Resources
- **`client.servers`** - Server management and operations
  - Full CRUD operations, container management, Docker images, commands, metrics
- **`client.applications`** - Application lifecycle management
  - CRUD + environment variables, labels, volumes, ports, containers
- **`client.user`** - User profile management
- **`client.workspaces`** - Workspace and team management

### Infrastructure & Integrations
- **`client.integrations`** - Third-party integrations (GitHub, etc.)
- **`client.providers`** - Cloud provider interactions (DigitalOcean, Hetzner)
- **`client.github`** - GitHub API operations

### Monitoring & Notifications
- **`client.alerts`** - Alert configuration and management
- **`client.notifications`** - Notification channels and history
- **`client.deployments`** - Deployment tracking

### Organization
- **`client.projects`** - Project management and resource grouping
- **`client.apiTokens`** - API token management
- **`client.templates`** - Template retrieval

## Advanced Usage

### Type-Safe Operations

```typescript
import type {
  Server,
  Application,
  CreateServerRequest,
  EnvironmentVariable,
  Alert
} from '@serversinc/sdk';

// All operations are fully typed
const server: Server = await client.servers.create({
  name: 'web-server-01',
  provider: 'digitalocean',
  region: 'nyc1',
  type: 's-1vcpu-1gb',
  image: 'ubuntu-22-04-x64'
});

// Type-safe environment variable management
const envVars: EnvironmentVariable[] = await client.applications.env.list(appId);
await client.applications.env.create(appId, {
  key: 'DATABASE_URL',
  value: 'postgresql://...'
});

// Alert management with full type safety
const alerts: Alert[] = await client.alerts.list();
const newAlert = await client.alerts.create({
  key: 'cpu_usage',
  operator: '>',
  value: '80',
  resource_type: 'server',
  resource_id: server.id
});
```

### Container & Docker Operations

```typescript
// Manage containers on servers
const containers = await client.servers.containers.list(serverId);
await client.servers.containers.performAction(serverId, containerId, {
  action: 'restart'
});

// Run commands on containers
const result = await client.servers.containers.runCommand(serverId, containerId, {
  command: 'ps aux'
});

// Docker image management
const images = await client.servers.images.list(serverId);
await client.servers.images.pull(serverId, { image: 'nginx:latest' });
```

### Workspace & Team Management

```typescript
// Workspace operations
const workspaces = await client.workspaces.list();
await client.workspaces.change({ workspaceId: 'new-workspace-id' });

// Team management
await client.workspaces.invite({
  email: 'teammate@example.com',
  role: 'member'
});
```

## Features

- **🔒 Complete Type Safety**: 50+ TypeScript types derived directly from Laravel models
- **📡 Full API Coverage**: All public endpoints across 12+ resources
- **⚡ Modern Architecture**: Built with native fetch, no external dependencies
- **🔄 Automatic Retries**: Exponential backoff with configurable retry logic
- **⏱️ Timeout Control**: Configurable request timeouts
- **🚨 Rich Error Handling**: Custom `ApiError` class with detailed error information
- **📦 Resource Organization**: Intuitive method grouping by API resource
- **🎯 TypeScript First**: Designed for TypeScript with full IntelliSense support

## Available Types

The SDK exports comprehensive TypeScript types for all API entities:

### Core Entities
- `User`, `Workspace`, `Server`, `Application`, `Container`
- `Alert`, `NotificationChannel`, `IntegrationToken`

### Request/Response Types
- `CreateServerRequest`, `CreateApplicationRequest`, `UpdateAlertRequest`
- `ApiResponse<T>`, `PaginatedResponse<T>`, `ErrorResponse`

### Infrastructure Types
- `ProviderRegion`, `ProviderServerType`, `DockerImage`
- `ServerMetrics`, `CommandHistory`, `ContainerHistory`

### Application Management
- `EnvironmentVariable`, `ApplicationLabel`, `ApplicationVolume`, `ApplicationPort`

### Organization
- `Project`, `WorkspaceMember`, `ApiToken`

All types are automatically generated from the actual Laravel API models, ensuring 100% accuracy and consistency.

## Error Handling

```typescript
import { ApiError } from '@serversinc/sdk';

try {
  const result = await client.servers.create(serverData);
} catch (error) {
  if (error instanceof ApiError) {
    console.log(`API Error: ${error.status} ${error.statusText}`);
    console.log(`Details: ${error.body}`);
  }
}
```

## Building

To build the SDK:

```bash
npm run build
```

This will:
- Run TypeScript compilation checks
- Generate minified JavaScript bundles
- Create type definition files
- Clean up build artifacts

## Contributing

The SDK types are generated from the Laravel API models to ensure accuracy. When the API changes, update the types in `src/types.ts` and rebuild.