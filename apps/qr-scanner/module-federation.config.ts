import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'qr-scanner',
  exposes: {
    './Routes': 'apps/qr-scanner/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
