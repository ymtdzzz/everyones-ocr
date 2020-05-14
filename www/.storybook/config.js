import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import '!style-loader!css-loader!sass-loader!../src/styles/normalize.css';

configure(
  () => {
    const req = require.context('../src', true, /.stories.tsx$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);

configure(loadStories, module);
