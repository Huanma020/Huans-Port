import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with your GitHub repo name
const repoName = 'Huans-Port';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});

