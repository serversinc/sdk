# Instructions to Update the Serversinc API SDK

This guide provides instructions for AI models to update the existing Serversinc API SDK based on changes to the OpenAPI specification. The SDK is designed to be clean, fully typed, and organized by resource groups.

## Prerequisites

- Existing SDK structure as described in Directory Layout
- Access to updated OpenAPI specification (openapi.yaml or openapi.json)
- Access to Laravel Models for type information

## Directory Layout

The SDK follows this directory structure:

```
sdk/
├── src/
│   ├── client.ts
│   ├── index.ts
│   ├── types.d.ts
│   ├── types.ts
│   └── resources/
│       ├── alerts.ts
│       ├── apiTokens.ts
│       ├── applications.ts
│       ├── events.ts
│       └── servers.ts
├── dist/
│   ├── client.d.ts
│   ├── index.d.ts
│   ├── types.d.ts
│   └── resources/
│       ├── alerts.d.ts
│       ├── apiTokens.d.ts
│       ├── applications.d.ts
│       ├── events.d.ts
│       └── servers.d.ts
├── package.json
├── tsconfig.json
├── README.md
└── UPDATE.md
```

## Model Capabilities

The AI model will be provided with an openapi.yaml or openapi.json file and access to Laravel Models for type information. The model can only modify `types.ts`, `types.d.ts`, and files in the `src/resources/` directory to update the SDK based on the provided openapi.yaml.

## Step 1: Update Generated Types

Run the generate-types script to update `src/types.d.ts` with the latest OpenAPI spec:

```bash
npm run generate-types
```

This regenerates `src/types.d.ts` with fully typed interfaces for all API paths, operations, and schemas.

## Step 2: Update Exported Types in types.d.ts

Transform the generated types from `src/types.d.ts` into developer-friendly named types by adding exports to `src/types.d.ts`. Define types for request payloads and responses that developers can import directly.

For example, add the following at the end of `src/types.d.ts`:

```typescript
// Developer-friendly named types derived from paths
export type CreateApplicationPayload = paths['/v1/applications']['post']['requestBody']['content']['application/json'];
export type CreateApplicationResponse = paths['/v1/applications']['post']['responses']['201']['content']['application/json'];
export type GetApplicationResponse = paths['/v1/applications/{applicationId}']['get']['responses']['200']['content']['application/json'];
export type UpdateApplicationPayload = paths['/v1/applications/{applicationId}']['put']['requestBody']['content']['application/json'];
export type UpdateApplicationResponse = paths['/v1/applications/{applicationId}']['put']['responses']['200']['content']['application/json'];

// Alert types
export type CreateAlertPayload = paths['/v1/alerts']['post']['requestBody']['content']['application/json'];
export type CreateAlertResponse = paths['/v1/alerts']['post']['responses']['201']['content']['application/json'];
export type GetAlertResponse = paths['/v1/alerts/{alertId}']['get']['responses']['200']['content']['application/json'];
export type UpdateAlertPayload = paths['/v1/alerts/{alertId}']['put']['requestBody']['content']['application/json'];
export type UpdateAlertResponse = paths['/v1/alerts/{alertId}']['put']['responses']['200']['content']['application/json'];

// Add types for other resources as needed
```

If the generated types need additional adjustments based on Laravel Models or other custom logic, modify `src/types.ts` accordingly.

## Step 3: Update Resource Modules

Update the files in `src/resources/` to reflect changes in the OpenAPI spec. Ensure methods use the updated types from `src/types.d.ts`.

For each resource, update the functions to match new endpoints, parameters, and responses. Examples of resource module structures:

### resources/apiTokens.ts
```typescript
import type { Serversinc } from '../client';

export const apiTokens = (client: Serversinc) => ({
  list: () => client.request('GET', '/v1/api-tokens'),
  create: (body: any) => client.request('POST', '/v1/api-tokens', body),
  delete: (tokenId: number) => client.request('DELETE', `/v1/api-tokens/${tokenId}`),
});
```

### resources/alerts.ts
```typescript
import type { Serversinc } from '../client';

export const alerts = (client: Serversinc) => ({
  list: () => client.request('GET', '/v1/alerts'),
  create: (body: any) => client.request('POST', '/v1/alerts', body),
  get: (alertId: string) => client.request('GET', `/v1/alerts/${alertId}`),
  update: (alertId: string, body: any) => client.request('PUT', `/v1/alerts/${alertId}`, body),
  delete: (alertId: string) => client.request('DELETE', `/v1/alerts/${alertId}`),
  toggle: (alertId: string) => client.request('PUT', `/v1/alerts/${alertId}/toggle`),
});
```

### resources/applications.ts
```typescript
import type { Serversinc } from '../client';

export const applications = (client: Serversinc) => ({
  list: () => client.request('GET', '/v1/applications'),
  create: (body: any) => client.request('POST', '/v1/applications', body),
  get: (applicationId: string) => client.request('GET', `/v1/applications/${applicationId}`),
  update: (applicationId: string, body?: any) => client.request('PUT', `/v1/applications/${applicationId}`, body),
  delete: (applicationId: string) => client.request('DELETE', `/v1/applications/${applicationId}`),
  env: {
    list: (applicationId: string) => client.request('GET', `/v1/applications/${applicationId}/env`),
    create: (applicationId: string, body: any) => client.request('POST', `/v1/applications/${applicationId}/env`, body),
    update: (applicationId: string, variableId: string, body: any) => client.request('PUT', `/v1/applications/${applicationId}/env/${variableId}`, body),
    delete: (applicationId: string, variableId: string) => client.request('DELETE', `/v1/applications/${applicationId}/env/${variableId}`),
  },
  // Add other sub-resources: labels, volumes, ports
});
```

Create or update similar files for `servers.ts` and `events.ts` as needed.

## Step 4: Build and Verify

Build the project to ensure no compilation errors:

```bash
npm run build
```

Test the updated SDK to confirm functionality with the new OpenAPI changes.

## Step 5: Update Version and Push to GitHub

Based on the changes made during the update, determine the appropriate version bump following semantic versioning (semver):

- **Major** (X.0.0): Breaking changes (e.g., removed endpoints, changed required fields)
- **Minor** (x.Y.0): New features (e.g., added endpoints, new optional fields)
- **Patch** (x.y.Z): Bug fixes or non-breaking improvements (e.g., type fixes, documentation)

Analyze the OpenAPI changes and resource updates to decide the version increment. Update the `version` field in `package.json` accordingly.

Then, commit the changes with a descriptive message including the new version:

```bash
git add .
git commit -m "vX.Y.Z - [brief description of changes]"
git push origin main
```

If this is a new release, consider creating a GitHub release with the changelog.

## Key Principles

1. **Resource Grouping**: Organize methods under nested objects matching API resources
2. **Full Typing**: Use generated OpenAPI types for all requests/responses
3. **Consistent Naming**: Use `list`, `create`, `get`, `update`, `delete` for CRUD operations
4. **Error Handling**: Throw descriptive errors for HTTP failures
5. **Flexibility**: Support extra headers and unauthenticated requests
6. **Clean Structure**: Keep everything in a single client class with nested objects

## Tips for Updating

- Always regenerate types first from the OpenAPI spec
- Compare the new OpenAPI with the previous version to identify changes
- Update resource methods to use new type definitions
- Ensure backward compatibility where possible
- Handle query parameters by building URLSearchParams
- Use the `authenticated` flag for endpoints that don't require auth
- Test each method with real API calls to ensure types match responses