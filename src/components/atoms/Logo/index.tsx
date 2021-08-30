import styled from 'styled-components'
import { color } from '../../../design/color'
import { fontSize } from '../../../design/fontSize'
import Link from 'next/link'

const StyledLogo = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-size: ${fontSize[36]};
  color: ${color['pink'][900]};
`

export function Logo() {
  return (
    <StyledLogo>
      <Link href="/" passHref>
        <a>stock</a>
      </Link>
    </StyledLogo>
  )
}
