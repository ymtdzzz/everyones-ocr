import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../interfaces/storybook'
import DropZone from './index'

storiesOf(StoryTypes.App, module)
  .add("DropZone", () => (
    <div>
      <DropZone />
    </div>
  ))
