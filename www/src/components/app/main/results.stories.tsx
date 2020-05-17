import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryTypes } from '../../../interfaces/storybook'
import Results from './Results'
import { OCRResult } from '../../../interfaces/types'
import styled from 'styled-components'

const filepath = "https://upload.wikimedia.org/wikipedia/commons/e/ee/Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg"
const result = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const Title = styled.h2`
  text-align: center;
`

const Wrap = styled.div`
  margin: 0 auto;
`

const resultListGen = (count: number) => {

  let list: OCRResult[] = [];
  for (let i in [...Array(count)]) {
    const isLoading = parseInt(i) % 2 == 0
    list.push({
      filepath,
      result,
      isLoading
    })
  }
  return list
}

storiesOf(StoryTypes.App, module)
  .add("Results", () => (
    <>
      <Wrap>
        <Title>5 results</Title>
        <Results results={resultListGen(5)} />
      </Wrap>
      <Wrap>
        <Title>1 results</Title>
        <Results results={resultListGen(1)} />
      </Wrap>
    </>
  ))
