import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pluginTeste01AlxPlugin = createPlugin({
  id: 'plugin-teste01-alx',
  routes: {
    root: rootRouteRef,
  },
});

export const PluginTeste01AlxPage = pluginTeste01AlxPlugin.provide(
  createRoutableExtension({
    name: 'PluginTeste01AlxPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
