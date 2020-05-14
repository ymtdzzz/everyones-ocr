import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  min-width: 126px;
  display: inline-block;
  padding: 0 0.625rem;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 0.5625rem;
  font-weight: bold;
  letter-spacing: 0;
  color: white;
  background-color: #2699FB;
  border-radius: 0.8125rem;
  &:hover {
    cursor: pointer;
    background-color: #36A9FF;
  }

  ${props => props.theme == "danger" ? `
    background-color: #FC4C4C;
    &:hover {
      background-color: #FF5C5C;
    }
  `:``}
`

interface ButtonProps {
  label: string
  theme: 'primary' | 'danger'
}

const Button: React.FC<ButtonProps> = ({
  label,
  theme
}): JSX.Element => {
  return (
    <ButtonWrapper theme={theme}>{label}</ButtonWrapper>
  )
}

export default Button
