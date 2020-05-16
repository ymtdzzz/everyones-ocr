import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../interfaces/storybook'
import Infos from './Infos'

storiesOf(StoryTypes.App, module)
  .add("Infos", () => (
    <div>
      <Infos />
    </div>
  ))
