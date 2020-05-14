import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../types/storybook'
import DropZone from './index'

storiesOf(StoryTypes.App, module)
  .add("DropZone", () => (
    <div>
      <DropZone />
    </div>
  ))
