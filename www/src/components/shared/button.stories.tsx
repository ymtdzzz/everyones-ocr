import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import{ linkTo } from '@storybook/addon-links'

import { StoryTypes } from '../../types/storybook'
import Button from './Button'

storiesOf(StoryTypes.Shared, module)
  .add("Button", () => (
    <div>
      <Button label='Button' theme='primary' />
    </div>
  ))
