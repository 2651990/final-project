import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'camp.express',
  appName: 'campexpress',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
