import styled from 'styled-components'
import { color } from '../../../design/color'
import { fontSize } from '../../../design/fontSize'

const StyledLogo = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-size: ${fontSize[36]};
  color: ${color['pink'][900]};
`

export function Logo() {
  return <StyledLogo>stock</StyledLogo>
}
