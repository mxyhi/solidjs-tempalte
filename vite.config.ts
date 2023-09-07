import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtoolsPlugin from 'solid-devtools/vite';
import suidPlugin from '@suid/vite-plugin';
import UnoCSS from 'unocss/vite';
import { presetIcons, presetUno, presetAttributify } from 'unocss';

export default defineConfig({
  plugins: [
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtoolsPlugin({
    //   autoname: true,
    // }),
    suidPlugin(),
    solidPlugin(),
    UnoCSS({
      shortcuts: [
        {
          logo: 'i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360',
        },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
