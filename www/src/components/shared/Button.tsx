import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  margin: 1em;
  border-radius: 0.2em;
  border: 0.1em solid red;
`

interface ButtonProps {
  label: string
  theme: 'primary' | 'danger'
}

const Button: React.FC<ButtonProps> = ({
  label,

}): JSX.Element => {
  return (
    <ButtonWrapper>{label}</ButtonWrapper>
  )
}

export default Button
