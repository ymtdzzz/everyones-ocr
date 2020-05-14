import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Header from './components/app/header/index'

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
        <Header />
      </AppWrapper>
    </React.Fragment>
  )
}

export default App;
