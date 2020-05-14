import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../types/storybook'
import Footer from './index'

storiesOf(StoryTypes.App, module)
  .add("Footer", () => (
    <div>
      <Footer />
    </div>
  ))
