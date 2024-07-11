import * as path from 'path';
import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp';
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    // antd4 需要开启此部分
    vitePluginImp({
      optimize: false,
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  server: {
    host: '0.0.0.0'
  },


  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      // { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      // { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      // { find: '@utils', replacement: path.resolve(__dirname, './src/utils') }
    ]
  },

   // antd4 需要开启此部分
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 如需定制 antd 主题，请取消以下内容注释 https://ant.design/docs/react/customize-theme

        // // modifyVars: {},
        // additionalData: `@import "@packages/styles/theme.less";`

        modifyVars: {
          hack: `true; @import "./src/theme.less";`,
        },
      },
    },
  },
})
