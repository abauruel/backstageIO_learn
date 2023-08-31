import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pluginTeste01AlxPlugin, PluginTeste01AlxPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pluginTeste01AlxPlugin)
  .addPage({
    element: <PluginTeste01AlxPage />,
    title: 'Root Page',
    path: '/plugin-teste01-alx'
  })
  .render();
