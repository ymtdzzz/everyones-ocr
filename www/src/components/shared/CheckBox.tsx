import React, { useState } from 'react'
import styled from 'styled-components'
import CheckIcon from '../../assets/images/check-solid.svg'

const Check = styled.div<{ checked: boolean }>`
  width: 45px;
  height: 45px;
  box-sizing: border-box;
  border-radius: 100%;
  padding: 12px;
  svg {
    color: white;
  }
  ${props => props.checked ? `
    background-color: #2699FB;
    svg {
      display: block;
    }
  ` : `
    border: 3px solid #7FC4FD;
    background-color: white;
    svg {
      display: none;
    }
  `}
`

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Check checked={isChecked} onClick={toggleChecked}>
      <CheckIcon />
    </Check>
  )
}

export default CheckBox
