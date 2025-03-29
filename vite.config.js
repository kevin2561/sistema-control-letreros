import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //electron por si acaso   
  // base: "./", // Esto ayuda a que Electron cargue correctamente los archivos en producción
  // build: {
  //   outDir: "dist",
  // }
})
