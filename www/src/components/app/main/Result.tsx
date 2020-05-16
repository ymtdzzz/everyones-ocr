import React from 'react'
import styled from 'styled-components'
import { OCRResult } from '../../../interfaces/types'

import ClipboardSvg from '../../../assets/images/clipboard-regular.svg'

const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`

const ImageContainer = styled.div`
  margin-bottom: 0.625rem;
  height: 66.6%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const TextArea = styled.div`
  text-align: left;
  font-size: 0.6875rem;
  border: 1px solid #707070;
  border-radius: 3px;
  padding: 0.4375rem;
  position: relative;
  height: 33.3%;
  svg {
    height: 20px;
    width: 20px;
    position: absolute;
    bottom: 0.4375rem;
    right: 0.4375rem;
  }
`

interface ResultProps {
  result: OCRResult
}

const Result: React.FC<ResultProps> = ({
  result
}) => {
  return (
    <ResultWrapper>
      <ImageContainer>
        <img src={result.filepath} />
      </ImageContainer>
      <TextArea>
        {result.result}
        <ClipboardSvg />
      </TextArea>
    </ResultWrapper>
  )
}

export default Result
