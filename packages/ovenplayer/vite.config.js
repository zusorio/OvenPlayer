import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';
import {readFileSync} from 'node:fs';
import Sonda from 'sonda/vite';

// If your project is ESM, this import works:
// import pkg from './package.json' assert { type: 'json' };
// If not, read version from package.json like this:
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

export default defineConfig({
    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/js/ovenplayer.js', import.meta.url)),
            name: 'OvenPlayer',
            formats: ["umd"],
            fileName: () => 'ovenplayer.js',
        },
        sourcemap: true,
    },

    plugins: [Sonda()],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/js', import.meta.url)),
            'utils': fileURLToPath(new URL('./src/js/utils', import.meta.url)),
            'api': fileURLToPath(new URL('./src/js/api', import.meta.url)),
            'view': fileURLToPath(new URL('./src/js/view', import.meta.url)),
        },
    },

    define: {
        // Equivalent to webpack.DefinePlugin({ __VERSION__: 'x.y.z' })
        __VERSION__: JSON.stringify(pkg.version),
    },
});
