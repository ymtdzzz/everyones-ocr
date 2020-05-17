import React, { useState } from 'react'
import styled from 'styled-components'
import CheckIcon from '../../assets/images/check-solid.svg'
import media from 'styled-media-query'

const Check = styled.div<{ checked: boolean }>`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 100%;
  padding: 8px;

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

  ${media.greaterThan('large')`
    width: 43px;
    height: 43px;
    padding: 12px
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
