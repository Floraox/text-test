import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  routes: [
    // {
    //   path: '/',
    //   component: '../layouts/index',
    //   routes: [

        {
          path: '/polarity',
          component: './polarity',
        },
        {
          path: '/abnormal',
          component: './abnormal',
        },
        {
          path: '/negative',
          component: '../pages/negative',
        },
    //   ],
    // },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'text-test',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
export default config;
