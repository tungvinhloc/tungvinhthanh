
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          // Fix: Use path.resolve('.') instead of process.cwd() to resolve the current working directory, avoiding potential type definition issues with the process object in the Vite config environment while maintaining ESM compatibility.
          '@': path.resolve('.'),
        }
      }
    };
});
