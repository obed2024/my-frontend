import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './front-index.html',
        login: './pages/login.html',
        register: './pages/register.html',
        seller: './pages/seller.html',
        dashboard:'./pages/dasboard.html',
        customer:'./pages/customer.html'
        // add other HTML files if you have more
      }
    }
  },
  server: {
    port: 3000
  }
});