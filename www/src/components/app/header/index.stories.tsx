import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../interfaces/storybook'
import Header from './index'

storiesOf(StoryTypes.App, module)
  .add("Header", () => (
    <div>
      <Header />
    </div>
  ))
