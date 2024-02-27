import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'accordion',
  exposes: {
    './Routes': 'apps/accordion/src/app/app.routes.ts',
  },
};

export default config;
