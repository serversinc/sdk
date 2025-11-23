export type Application = {
  id: string; // ULID
  name: string;
  slug: string;
  user_id: string;
  port?: number;
  domain: string;
  image: string;
  tag: string;
  compose_path?: string;
  auto_deploy?: boolean;
  auto_ssl?: boolean;
  is_production?: boolean;
  deploy_hook: string;
  deploy_secret: string;
  last_deployed_at?: string;
  type: 'docker_image' | 'github' | 'docker_compose';
  repository?: string;
  branch?: string;
  last_deployed_commit?: string;
  github_webhook_id?: number;
  workspace_id: string;
  docker_username?: string;
  docker_password?: string;
  docker_registry?: string;
  deploy_strategy?: string;
  group_id?: string;
  template_id?: string;
  created_at?: string;
  updated_at?: string;
};

export type Alert = {
  id: string; // ULID
  resource_type: string;
  resource_id: string;
  key: string;
  operator: string;
  value: string;
  status: string;
  workspace_id: string;
  user_id: string;
  created_at?: string;
  updated_at?: string;
};

export type ApiToken = {
  id: number;
  name: string;
  abilities: string[];
  last_used_at?: string;
  expires_at?: string;
  plainTextToken?: string;
  created_at?: string;
  updated_at?: string;
};

export type Server = {
  id: string; // ULID
  user_id: string;
  provider: string;
  region: string;
  datacenter: string;
  ip_v6?: string;
  ip_v4: string;
  cpu: number;
  memory: number;
  disk: number;
  status: string; // pending_creation, provisioning, running_setup, active
  ssh_key_path?: string;
  root_password?: string;
  name: string;
  last_seen?: string;
  secret_key?: string;
  workspace_id: string;
  provider_server_id?: string;
  imported?: boolean;
  auto_update_tugboat?: boolean;
  failed_stage?: string;
  failed_stage_reason?: string;
  created_at?: string;
  updated_at?: string;
};

export type Deployment = {
  id: string;
  // Add deployment-specific properties when model is available
};

export type NotificationChannel = {
  id: string; // ULID
  name: string;
  type: string;
  identifier: string;
  notifications: any; // JSON field
  enabled: boolean;
  user_id: string;
  workspace_id: string;
  created_at?: string;
  updated_at?: string;
};

// Environment Variables
export type EnvironmentVariable = {
  id: number;
  application_id: number;
  key: string;
  value?: string;
  created_at?: string;
  updated_at?: string;
};

// Labels
export type ApplicationLabel = {
  id: number;
  application_id: number;
  key: string;
  value?: string;
  created_at?: string;
  updated_at?: string;
};

// Volumes
export type ApplicationVolume = {
  id: number;
  application_id: number;
  source: string;
  target: string;
  read_only?: boolean;
  created_at?: string;
  updated_at?: string;
};

// Ports
export type ApplicationPort = {
  id: number;
  application_id: number;
  container: number;
  host?: number;
  protocol: string;
  created_at?: string;
  updated_at?: string;
};

