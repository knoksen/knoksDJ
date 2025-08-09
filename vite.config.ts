import {defineConfig, loadEnv} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';
import process from 'process';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        manifest: {
          name: 'PromptDJ',
          short_name: 'PromptDJ',
          description: 'Steer a continuous stream of music with text prompts',
          theme_color: '#2a2a2a',
          background_color: '#111111',
          display: 'standalone',
          start_url: '/',
          icons: [
            {
              src: 'https://storage.googleapis.com/generative-ai-devsite/doc-img/cb2/pwa-icon-192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'https://storage.googleapis.com/generative-ai-devsite/doc-img/cb2/pwa-icon-512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),
    ],
  };
});
