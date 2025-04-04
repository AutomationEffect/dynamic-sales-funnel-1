
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { componentTagger } from 'lovable-tagger';

// Fix for the ImportMeta type issue
const __filename = fileURLToPath(import.meta.url as unknown as string);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  }
}));
