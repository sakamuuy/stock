import styled from 'styled-components'
import { fontSize } from '../../../design/fontSize'

export function Logo() {
  const Logo = styled.h1`
    font-family: 'Work Sans', sans-serif;
    font-size: ${fontSize[36]};
  `

  return <Logo>film</Logo>
}
