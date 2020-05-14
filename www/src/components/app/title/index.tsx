import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  padding: 1.5rem 0;
  text-align: center;
`

const MainTitle = styled.p`
  font-size: 1.9375rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`

const SubTitle = styled.p`
  font-size: 0.9375rem;
`

const Title = () => {
  return (
    <TitleWrapper>
      <MainTitle>HOGE</MainTitle>
      <SubTitle>OCR without sending data to server.</SubTitle>
    </TitleWrapper>
  )
}

export default Title
