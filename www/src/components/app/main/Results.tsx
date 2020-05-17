import React from 'react'
import styled from 'styled-components'
import { OCRResult } from 'src/interfaces/types'
import Result from './Result'

const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface ResultsProps {
  results: OCRResult[]
}

const Results: React.FC<ResultsProps> = ({
  results
}) => {
  let list: JSX.Element[] = [];

  results.map(r => {
    list.push(<Result result={r} />)
  })

  return (
    <ResultsWrapper>
      {list}
    </ResultsWrapper>
  )
}

export default Results
