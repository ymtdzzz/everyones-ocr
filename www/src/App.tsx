import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Title from './components/app/title/index'
import Header from './components/app/header'
import Footer from './components/app/footer'
import Main from './components/app/main'

const GlobalStyle = createGlobalStyle`
  ${normalize}
`

const AppWrapper = styled.div`
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Main />
        <Footer />
      </AppWrapper>
    </>
  )
}

export default App;
