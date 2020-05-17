import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../interfaces/storybook'
import CheckBox from './CheckBox'

storiesOf(StoryTypes.Shared, module)
  .add("CheckBox", () => (
    <div>
      <CheckBox />
    </div>
  ))
