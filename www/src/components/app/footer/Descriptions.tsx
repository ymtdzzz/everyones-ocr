import React from 'react'
import styled from 'styled-components'

const DescriptionContainer = styled.p`
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  margin-bottom: 2rem;
  a {
    color: white;
    &:hover {
      color: #ccc;
    }
  }
`

const Title = styled.p`
  margin-bottom: 0.9375rem;
`

const Body = styled.p`
`

const Descriptions = () => {
  return (
    <>
      <DescriptionContainer>
        <Title>Contributing</Title>
        <Body>
          <p>Please feel free to contribute to this project!</p>
          <p>
            If you find an issue, please create an issue in <a href="https://github.com/zeroclock/everyones-ocr" target="_blank">the github repository</a>.
          </p>
        </Body>
      </DescriptionContainer>
      <DescriptionContainer>
        <Title>Author</Title>
        <Body><a href="https://github.com/zeroclock" target="_blank">@zeroclock</a></Body>
      </DescriptionContainer>
    </>
  )
}

export default Descriptions
