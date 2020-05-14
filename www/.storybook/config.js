import { configure, addDecorator } from '@storybook/react';
import React from 'react';

configure(
  () => {
    const req = require.context('../src', true, /.stories.tsx$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);

configure(loadStories, module);
