import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'accordion',
  exposes: {
    './Routes': 'apps/accordion/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
