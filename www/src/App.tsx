import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Title from './components/app/title/index'

const GlobalStyle = createGlobalStyle`
  ${normalize}
`

const AppWrapper = styled.div`
`

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Title />
      </AppWrapper>
    </React.Fragment>
  )
}

export default App;
