import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Wrapper = styled.div`
  ${media.greaterThan("large")`
    display: flex;
    flex-basis: 100%;
  `}
`

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

  ${media.greaterThan("large")`
    margin-left: 60px;
    text-align: left;
  `}
`

const Title = styled.p`
  margin-bottom: 0.9375rem;
`

const Body = styled.p`
`

const Descriptions = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Descriptions
