import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: white;
  border: 1px solid lightgrey;
  border-radius: 12px;
  box-shadow: inset 1px 1px 0px lightgrey;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
