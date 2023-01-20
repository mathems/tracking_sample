export const NODE_ENVS = ['dev', 'prod', 'test'] as const;
export type NodeEnv = (typeof NODE_ENVS)[number];
