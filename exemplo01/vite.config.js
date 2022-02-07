import {
    resolve
} from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                galeria: resolve(__dirname, 'galeria/index.html')
            }
        }
    }
};