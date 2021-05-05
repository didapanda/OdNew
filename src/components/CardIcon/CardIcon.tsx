import React from 'react'
import styled from 'styled-components'

interface CardIconProps {
  children?: React.ReactNode,
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledCardIcon>
    {children}
  </StyledCardIcon>
)

const StyledCardIcon = styled.div`
  background-color: white;
  font-size: 36px;
  height: 80px;
  width: 80px;
  border: 1px grey;
  border-radius: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: inset 4px 4px 8px lightgrey,
    inset -6px -6px 12px lightgrey;
  margin: 0 auto ${props => props.theme.spacing[3]}px;
`

export default CardIcon