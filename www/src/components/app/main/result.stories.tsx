import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../interfaces/storybook'
import Result from './Result'
import { OCRResult } from '../../../interfaces/types'
import styled from 'styled-components'

const result: OCRResult = {
  filepath: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg",
  result: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

const Wrap = styled.div`
  margin: 0 auto;
`

storiesOf(StoryTypes.App, module)
  .add("Result", () => (
    <Wrap>
      <Result result={result} />
    </Wrap>
  ))
