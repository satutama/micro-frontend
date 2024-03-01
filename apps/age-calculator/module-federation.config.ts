import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'age-calculator',
  exposes: {
    './Routes': 'apps/age-calculator/src/app/app.routes.ts',
  },
};

export default config;
