import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'result-summary',
  exposes: {
    './Routes': 'apps/result-summary/src/app/app.routes.ts',
  },
};

export default config;
