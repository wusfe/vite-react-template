import { defineConfig } from 'vite'
// import vitePluginImp from 'vite-plugin-imp';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // antd4 需要开启此部分
    // vitePluginImp({
    //   optimize: true,
    //   libList: [
    //     {
    //       libName: 'antd',
    //       style: (name) => `antd/es/${name}/style`,
    //     },
    //   ],
    // }),
  ],
  server: {
    host: '0.0.0.0'
  },
   // antd4 需要开启此部分
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //       // 如需定制 antd 主题，请取消以下内容注释 https://ant.design/docs/react/customize-theme
  //       // modifyVars: {
  //       //   hack: `true; @import "./src/theme.less";`,
  //       // },
  //     },
  //   },
  // },
})
