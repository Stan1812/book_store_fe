// https://umijs.org/config/
import path from 'path';
import pageRoutes from './router.config';

export default {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
          webpackChunkName: true,
        },
        title: {
          defaultTitle: '商城',
        },
        dll: false,
        pwa: false,
        hd: false,
        routes: {
          exclude: [],
        },
        hardSource: false,
      },
    ],
  ],
  //   exportStatic: {},
  routes: pageRoutes,
  // Theme for antd-mobile
  theme: {
    // 'brand-primary': '#1890ff',
    // 'brand-primary-tap': '#00CC66',
  },
  //   ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssnano: {
    mergeRules: false,
  },
  targets: {
    android: 6,
    ios: 7,
  },
  outputPath: './deploy/dist',
  hash: true,
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
};
