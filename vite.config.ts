import { resolve } from 'path';
import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default {
  plugins: [vue()],
  ssgOptions: {
    includedRoutes(_paths:any[], routes:any[]) {
      // use original route records
      return routes.flatMap((route:any) => route.path + (route.path.endsWith('/') ? 'index' : '/index'));
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  }
} as UserConfig;
