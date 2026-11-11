import { defineConfig } from 'vite';

// base './' — сборку можно выложить в любую папку хостинга
export default defineConfig({ base: './', build: { target: 'es2020' } });
