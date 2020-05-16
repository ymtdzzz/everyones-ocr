import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const InfoContainer = styled.div`
  text-align: center;
`

const Title = styled.p`
  font-size: 1.3125rem;
  font-weight: bold;
  margin-bottom: 1.125rem;
`

const Body = styled.p`
  margin-top: 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
`

const Infos = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <Title>About this service</Title>
        <Body>
          <p>About this service........</p>
        </Body>
      </InfoContainer>
    </Wrapper>
  )
}

export default Infos
