import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'result-summary',
  exposes: {
    './Routes': 'apps/result-summary/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
