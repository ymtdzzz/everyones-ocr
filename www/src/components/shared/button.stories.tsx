import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import{ linkTo } from '@storybook/addon-links'

import { StoryTypes } from '../../interfaces/storybook'
import Button from './Button'

storiesOf(StoryTypes.Shared, module)
  .add("Button", () => (
    <div>
      <Button label='DOWNLOAD ALL' theme='primary' /><br />
      <Button label='DOWNLOAD SELECTED' theme='primary' /><br />
      <Button label='ADD IMAGES' theme='primary' /><br />
      <Button label='CLEAR RESULTS' theme='danger' /><br />
    </div>
  ))
