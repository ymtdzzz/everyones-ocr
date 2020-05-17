import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../interfaces/storybook'
import Main from './index'

storiesOf(StoryTypes.App, module)
  .add("Main", () => (
    <div>
      <Main />
    </div>
  ))
