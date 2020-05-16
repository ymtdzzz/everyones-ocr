import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../types/storybook'
import Infos from './Infos'

storiesOf(StoryTypes.App, module)
  .add("Infos", () => (
    <div>
      <Infos />
    </div>
  ))
